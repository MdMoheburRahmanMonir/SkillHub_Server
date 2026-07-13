import { MongoClient } from "mongodb";

const uri = 'mongodb://jobportal:lrCez1bjOwswnP1Y@ac-nny0w2b-shard-00-00.ifhtaoi.mongodb.net:27017,ac-nny0w2b-shard-00-01.ifhtaoi.mongodb.net:27017,ac-nny0w2b-shard-00-02.ifhtaoi.mongodb.net:27017/?ssl=true&replicaSet=atlas-2b4f6i-shard-0&authSource=admin&appName=Cluster0';

if (!uri) {
    throw new Error("MONGO_DB_URI is not defined");
}

const client = new MongoClient(uri);

export const db = client.db('skillhub');

export const connectDB = async () => {
    await client.connect();

    console.log("✅ MongoDB Connected Successfully");
};