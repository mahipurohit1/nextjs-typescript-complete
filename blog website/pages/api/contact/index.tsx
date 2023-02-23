import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    const newData = {
      name,
      email,
      message,
    };
    const client = await MongoClient.connect("enter db link");
    const db = client!.db();
    await db.collection("emails").insertOne({ newMessage: newData });

    client!.close();
    res.status(200).json({ message: "message send Successfully" });
  }
};

export default handler;
