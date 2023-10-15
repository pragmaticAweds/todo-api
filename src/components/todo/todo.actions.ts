import { Request, Response } from "express";
import { z } from "zod";
import { addTodoSchema } from "./todo.policy";
import TodoModel from "./todo.model";

const addTodo = async (req: Request, res: Response) => {
  const { task }: z.infer<typeof addTodoSchema> = req.body;

  try {
    const existingTodo = await TodoModel.findOne({ task });

    if (existingTodo) return res.status(409).json("task already exist");

    const newTodo = await new TodoModel({ task }).save();

    return res
      .status(200)
      .json({ message: "new todo created successfully", data: newTodo });
  } catch (err) {
    return res.status(500).json("error adding todo");
  }
};

export { addTodo };
