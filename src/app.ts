import express from "express";
import TodoRoutes from "./routes/todoroutes";
import { json } from "body-parser";
import { PORT } from "./config";

const app = express();

app.use(json());

app.use("/todos", TodoRoutes);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.log("object");
    res.sendStatus(500).json({ message: err.message });
  }
);

app.listen(PORT);
