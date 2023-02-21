import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

async function connection() {
  const client = await MongoClient.connect("enter the db link");
  return client;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const emailId = req.body.email;
    if (!emailId || !emailId.includes("@")) {
      res.status(500).json({ message: "invalid emailId address" });
      return;
    }
    let client: MongoClient;

    try {
      client = await connection();
    } catch (error) {
      res.status(500).json({ message: "database connection failed" });
    }

    const db = client!.db();
    await db.collection("emails").insertOne({ email: emailId });

    client!.close();

    console.log(emailId);
    res.status(200).json({ message: "email entered successfully" });
  }
};
export default handler;
