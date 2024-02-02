// const express = require("express");
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRouter from "./route/auth.route.js";
import multer from "multer";
import path from "path";
dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
  console.log("database connected");
});
const app = express();
app.use(express.json());

app.use("/api/auth", authRouter);
// Image storage Engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({ storage });
// creating upload endpoint
app.use("/images", express.static("upload/image"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

const port = 5000;
app.listen(port, (req, res) => {
  console.log(`listining post at ${port}`);
});
