import { SendQuery } from "../../db/db";

const UserTableSQL = 
    `CREATE TABLE IF NOT EXISTS users (
      id      int NOT NULL AUTO_INCREMENT,
      fname   varchar(128),
      lname   varchar(128),
      logins  int,
      PRIMARY KEY(id)
    )`
;

export interface UserDataInterface {
  id: number;
  fname: string;
  lname: string;
  logins: number;
}

export const CreateUserTable = (callback?: any) => {
  SendQuery(UserTableSQL, callback);
};
