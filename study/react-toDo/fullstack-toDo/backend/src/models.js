import mongoose from "mongoose";

const taskShema = new mongoose.Schema({
  label: String,
  completed: Boolean,
});

const Task = mongoose.model("ToDo", taskShema);

export { Task };
