import { SendQuery, TABLES } from "./db";

export const getAllUsers = (callback: any) => {
  SendQuery(`SELECT * FROM ${TABLES.users}`, (data: any) => {
    callback(data);
  });
};

export const getSingleUser = (id: number, callback: any) => {
  SendQuery(
    `SELECT * FROM ${TABLES.users} WHERE ${TABLES.users}.id = ${id}`,
    (data: any) => {
      callback(data);
    }
  );
};
