import { MongoClient } from "mongodb";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const email = credentials.email;
        const password = credentials.password;
        const client = await MongoClient.connect(
          "mongodb+srv://test:test@cluster0.kh5sre0.mongodb.net/?retryWrites=true&w=majority"
        );

        const db = client.db();

        const existingUser = await db
          .collection("member")
          .findOne({ email: email });

        if (!existingUser) {
          throw new Error("user not founds");
        }

        const isValid = password === existingUser.password;

        if (!isValid) {
          throw new Error("incorrect password");
        }
        return existingUser;
      },
    }),
  ],
});
