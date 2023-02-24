import { MongoClient } from "mongodb";
const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, password } = req.body;
    console.log(name, email, password);

    const client = await MongoClient.connect("enter db link");

    const db = client.db();

    await db.collection("member").insertOne({ name, email, password });

    res.status(200).json({ message: "data insert successfully " });
    client.close();
  }
};

export default handler;
