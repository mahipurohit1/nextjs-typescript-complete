import { RequestBody } from "@/types";
import { hashPassword } from "@/utils/auth";
import { connectToDatabase } from "@/utils/db";
import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  try {
    if (req.method !== "POST")
      throw { status: 405, message: "Method not allowed" };

    const { email, password } = req.body as RequestBody;

    const isValid =
      email?.includes("@") && password && password.trim().length >= 7;

    if (!isValid) throw { status: 422, message: "Invalid input" };

    const newUser = { email, password: hashPassword(password) };

    const client = connectToDatabase();
    const users = client.db().collection("users");

    const existingUser = await users.findOne({ email });
    if (existingUser) {
      client.close();
      throw { status: 400, message: "Email already registered" };
    }

    await users.insertOne(newUser);
    client.close();

    res.status(201).json({ message: "Created user!", newUser });
  } catch (error: any) {
    const status = error.status || 500;
    const message = error.message || "Something went wrong";

    res.status(status).json({ message, error });
  }
};

export default handler;
