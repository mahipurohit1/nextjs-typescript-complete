import { readFileSync } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.fId;
  const filePath = path.join(process.cwd(), "data", "feedback.json");
  const resData = readFileSync(filePath, "utf-8");
  const data = JSON.parse(resData);

  const selectedData = data.filter(
    (d: { id: string; email: string; feedback: string }) => {
      return d.id === id;
    }
  );
  res.status(200).json({ message: "successfully fetch", result: selectedData });
};

export default handler;
