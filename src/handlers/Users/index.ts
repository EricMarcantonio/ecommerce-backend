import { Request, Response } from "express";
import { getAllUsers, getSingleUser } from "../../db/Users";

export const HandleGetAllUsers = (req: Request, res: Response) => {
  getAllUsers((data: any) => {
    res.json(data);
  });
};

export const HandleGetSingleUserById = (req: Request, res: Response) => {
  getSingleUser(parseInt(req.params.id), (data: any) => {
    res.json(data);
  });
};
