import { SendQuery } from "../../db/db";

const SeedUserSQL = [
  `INSERT INTO users (fname, lname, logins) 
   VALUES ('Eric', 'Marcantonio', 1)`,
  `INSERT INTO users (fname, lname, logins) 
   VALUES ('Michelle', 'Mali', 1)`,
];
export const InsertSeedData = (callback?: any) => {
  for (let eachUser of SeedUserSQL) {
    SendQuery(eachUser, callback);
  }
};
