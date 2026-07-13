import { db } from "../../db/mongodb.js";

 

export const getAllUsers = async () => {
  const users = await db.collection("user").find().toArray(); 
  return users;
}; 