import express, { Request, Response } from "express";
import { getAllUsers } from "./db/Users";

const app = express();

app.get("/", (req: Request, res: Response) => {
  getAllUsers((data: any) => {
    res.json(data)
  })
});

app.listen(3000, () => {
  console.log("We good");
});

