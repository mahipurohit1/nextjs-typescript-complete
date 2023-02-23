import { RequestBody } from "@/types";
import { hashPassword, verifyPassword } from "@/utils/auth";
import { connectToDatabase } from "@/utils/db";
import { NextApiHandler } from "next";
import { getSession } from "next-auth/react";

const handler: NextApiHandler = async (req, res) => {
  try {
    if (req.method !== "PATCH")
      throw { status: 405, message: "Method not allowed" };

    const session = await getSession({ req });
    if (!session) throw { status: 401, message: "Not authenticated" };

    const email = session.user?.email;
    const { oldPassword, newPassword } = req.body as RequestBody;

    const isValid =
      oldPassword &&
      oldPassword.trim().length >= 7 &&
      newPassword &&
      newPassword.trim().length >= 7;

    if (!isValid) throw { status: 422, message: "Invalid input" };

    const client = connectToDatabase();
    const users = client.db().collection("users");
    const user = await users.findOne({ email });

    if (!user) {
      client.close();
      throw { status: 404, message: "User not found" };
    }

    const isValidPassword = verifyPassword(oldPassword, user.password);
    if (!isValidPassword) {
      client.close();
      throw { status: 403, message: "Invalid password" };
    }

    await users.updateOne(
      { email },
      { $set: { password: hashPassword(newPassword) } }
    );
    client.close();

    res.status(200).json({ message: "Password updated" });
  } catch (error: any) {
    const status = error.status || 500;
    const message = error.message || "Something went wrong";

    res.status(status).json({ message, error });
  }
};

export default handler;
