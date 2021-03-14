import { Router } from "express";
import { HandleGetAllUsers, HandleGetSingleUserById } from "../../handlers/Users";

const UserRouter = Router();

UserRouter.get("/all", HandleGetAllUsers)

UserRouter.get("/user/:id", HandleGetSingleUserById)

export { UserRouter };
