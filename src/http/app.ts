import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use((err: Error, __: Request, res: Response, _: NextFunction) => {
  return res.status(500).json({ message: `Unexpected Error - ${err.message}` });
});

export { app };
