// const express = require("express");
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRouter from "./route/auth.route.js";
dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
  console.log("database connected");
});
const app = express();
app.use(express.json());
app.use("/api/auth", authRouter);

const port = 5000;
app.listen(port, (req, res) => {
  console.log(`listining post at ${port}`);
});
