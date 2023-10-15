import express, { Application, Request, Response, json } from "express";
import helmet from "helmet";
import cors from "cors";

import { connectDB } from "./persistence/connectDb";
import appRouter from "./components/components.routes";

const app: Application = express();

const connectToDB = async () => {
  try {
    await connectDB();
  } catch (err) {
    console.log("error connecting");
  }
};

app.use(helmet()).use(cors()).use(json()).use(appRouter);

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json("welcome to beginning of nothingness");
});

connectToDB();

export default app;
