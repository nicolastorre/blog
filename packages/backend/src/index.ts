import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import postsRouter from "./infrastructure/http/routes/posts";

dotenv.config();

const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  throw new Error("❌ MONGO_URI is not defined in .env");
}

const app = express();
app.use(express.json());
app.use(cors());

app.use("/posts", postsRouter);

mongoose
  .connect(mongoUri)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.get("/", (_req, res) => {
  res.send("Hello from modern TypeScript + Express!");
});

app.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}`);
});
