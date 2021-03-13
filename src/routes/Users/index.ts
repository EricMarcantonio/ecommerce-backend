import { Router } from "express";
import { getAllUsers } from "../../db/Users";
import { HandleGetAllUsers } from "../../handlers/Users";

const UserRouter = Router();

UserRouter.get("/", (req, res) => {
    HandleGetAllUsers((data: any) => {
        res.send(data)
    })
})

export { UserRouter };
