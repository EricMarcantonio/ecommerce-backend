import { DB_POOL } from "../db";
import { checkErr } from "../util";

enum UserQuery {
  getAll = `SELECT * FROM users`,
}

export const getAllUsers = (callback: any) => {
  DB_POOL.getConnection((err, pool) => {
    checkErr(err);
    pool.query(UserQuery.getAll, (err, data) => {
      checkErr(err);
      callback(data)
    });
  });
};
