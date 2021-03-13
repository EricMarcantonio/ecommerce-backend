import { getAllUsers } from "../../db/Users"


export const HandleGetAllUsers = (callback: any) => {
    getAllUsers((data: any) => {
        callback(data)
    })
}