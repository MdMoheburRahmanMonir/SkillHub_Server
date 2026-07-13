import express from "express";
import routes from "./app/routes/index.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", routes);

export default app;