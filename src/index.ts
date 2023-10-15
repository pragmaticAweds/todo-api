import { createServer } from "http";
import app from "./app";

const server = createServer(app);

const port = 5000;

server.listen(port, () => console.log("server running on 5000"));
