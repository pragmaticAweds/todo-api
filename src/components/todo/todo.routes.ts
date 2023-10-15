import { Router } from "express";
import { policyMiddleware } from "../../utils/helpers";
import { addTodoSchema } from "./todo.policy";
import { addTodo } from "./todo.actions";

const router: Router = Router();

router.post("/", policyMiddleware(addTodoSchema), addTodo);

export default router;
