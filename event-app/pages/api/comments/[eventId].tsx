import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

async function connection() {
  const client = await MongoClient.connect("enter the db link");
  return client;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const eid = req.query.eventId as string;
    const { email, name, comment } = req.body;
    const newComment = {
      eventId: eid,
      email,
      name,
      comment,
    };

    let client: MongoClient;

    try {
      client = await connection();
    } catch (error) {
      res.status(500).json({ message: "database connection failed" });
    }
    const db = client!.db();
    const result = await db.collection("comments").insertOne(newComment);

    res
      .status(200)
      .json({ message: "comment entered successfully", result: newComment });
    client!.close();
  }

  if (req.method === "GET") {
    let client: MongoClient;

    try {
      client = await connection();
    } catch (error) {
      res.status(500).json({ message: "database connection failed" });
    }
    const eid = req.query.eventId as string;
    const db = client!.db();
    const result = await db
      .collection("comments")
      .find({ eventId: eid })
      .sort({ _id: -1 })
      .toArray();

    res
      .status(200)
      .json({ message: "comment entered successfully", result: result });
    client!.close();
  }
};
export default handler;
