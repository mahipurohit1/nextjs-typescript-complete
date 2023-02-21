import { readFileSync, writeFileSync } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, feedback } = req.body!;
    const feedbackObj = {
      id: new Date().toISOString(),
      email,
      feedback,
    };

    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const resData = readFileSync(filePath, "utf-8");
    const data = JSON.parse(resData);
    data.push(feedbackObj);
    writeFileSync(filePath, JSON.stringify(data));
    res.status(200).json({ message: "successfully send feedback" });
  }

  if (req.method === "GET") {
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const resData = readFileSync(filePath, "utf-8");
    const data = JSON.parse(resData);
    res
      .status(201)
      .json({ message: "successfully fetch feedback", result: data });
  }
};
export default handler;
