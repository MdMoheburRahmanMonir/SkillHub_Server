import { db } from "../../db/mongodb.js";



export const getAllUsers = async () => {
  const users = await db.collection("user").find().toArray();
  return users;
};
export const PostSkill = async (data: any) => {
  const users = await db.collection("skill").insertOne({ ...data });
  return users;
};

