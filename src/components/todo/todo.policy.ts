import { z } from "zod";

export const addTodoSchema = z.object({
  task: z.string().min(1, { message: "atleast a few word" }),
  //   completed: z.boolean().optional(),
});
