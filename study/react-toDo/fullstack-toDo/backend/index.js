import express from "express";
import fs from "fs/promises";
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { Task } from "./src/models.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const TASKS = [
  {
    id: uuidv4(),
    label: "Learn HTML",
    completed: true,
  },
  {
    id: uuidv4(),
    label: "Learn CSS",
    completed: true,
  },
  {
    id: uuidv4(),
    label: "Learn React",
    completed: true,
  },
];

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get("/api/tasks", async (req, res) => {
  await mongoose.connect(process.env.MONGO);

  const tasks = await Task.find();

  res.json({
    data: tasks,
  });
});

app.post("/api/tasks", async (req, res) => {
  await mongoose.connect(process.env.MONGO);

  const newTask = new Task({
    label: req.body.label,
    completed: false,
  });

  await newTask.save();

  res.status(201).json({ data: newTask });
});

app.get("/", async (req, res) => {
  const buf = await fs.readFile("../frontend/dist/index.html");
  const html = buf.toString();
  res.send(html);
});

app.use("/assets", express.static("../frontend/dist/assets"));

app.listen(5080, () => {
  console.log(`Server running on 5080`);
});
