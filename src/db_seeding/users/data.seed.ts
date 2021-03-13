import { DB_POOL } from "../../db";
import { checkErr } from "../../util";

const SeedUserSQL = [
  `INSERT INTO users (fname, lname, logins) 
    VALUES ('Eric', 'Marcantonio', 1)
    `,
  `INSERT INTO users (fname, lname, logins) 
VALUES ('Michelle', 'Mali', 1)
`,
];
export const InsertSeedData = () => {
  DB_POOL.getConnection((err, con) => {
    checkErr(err);
    for (let eachUser of SeedUserSQL) {
      con.query(eachUser, (err, data) => {
        checkErr(err);
      });
    }
  });
};
