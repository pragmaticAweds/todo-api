import { Router } from "express";

import todoRoutes from "./todo/todo.routes";

const appRouter: Router = Router();

appRouter.use("/todo", todoRoutes);

export default appRouter;
