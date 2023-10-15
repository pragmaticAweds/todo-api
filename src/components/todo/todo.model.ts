import { Schema, model } from "mongoose";
import { TodoAttributes } from "./todo.types";

const todoSchema = new Schema<TodoAttributes>(
  {
    task: String,
    completed: {
      type: Boolean,
      default: false,
    },
    completedAt: Date,
  },
  {
    timestamps: true,
  }
);

const TodoModel = model<TodoAttributes>("Todo", todoSchema);

export default TodoModel;
