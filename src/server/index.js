import express from "express";
import ViteExpress from "vite-express";
import Dotenv from "dotenv";
import connectDB from "./dbinit/connection.dB.js";
const app = express();
Dotenv.config({ path: "./env" });

connectDB()

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

ViteExpress.listen(app,process.env.PORT, () =>
  console.log(`Server is listening on port ${process.env.PORT}`)
);
