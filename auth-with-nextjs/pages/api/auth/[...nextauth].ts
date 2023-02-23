import { verifyPassword } from "@/utils/auth";
import { connectToDatabase } from "@/utils/db";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
  session: { strategy: "jwt", maxAge: 2 * 60 },
  providers: [
    Credentials({
      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;

        const isValid =
          email?.includes("@") && password && password.trim().length >= 7;

        if (!isValid) throw new Error("Invalid input");

        const client = connectToDatabase();
        const users = client.db().collection("users");
        const user = await users.findOne({ email });
        client.close();

        if (!user) throw new Error("User not found");

        const isValidPassword = verifyPassword(password, user.password);

        if (!isValidPassword) throw new Error("Unable to login");

        return { email: user.email };
      },
    }),
  ],
});
