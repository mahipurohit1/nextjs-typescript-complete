import { MONGODB_URL } from "@/config";
import { MongoClient } from "mongodb";

export function connectToDatabase() {
  if (!MONGODB_URL) throw new Error("Unable to find MONGODB_URL");

  const client = new MongoClient(MONGODB_URL);

  return client;
}
