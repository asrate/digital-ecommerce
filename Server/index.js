// const express = require("express");
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
  console.log("database connected");
});

const app = express();
const port = 5000;
app.listen(port, (req, res) => {
  console.log(`listining post at ${port}`);
});
