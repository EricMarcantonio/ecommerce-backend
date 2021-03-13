import {DB_POOL} from '../../db'
import {checkErr} from '../../util'

const UserTableSQL = `CREATE TABLE IF NOT EXISTS users (
    id      int NOT NULL AUTO_INCREMENT,
    fname   varchar(128) UNIQUE,
    lname   varchar(128) UNIQUE,
    logins  int,
    PRIMARY KEY(id)
)`;

export interface UserDataInterface {
  id: number,
  fname: string,
  lname: string,
  logins: number
}

export const CreateUserTable = () => {
  DB_POOL.getConnection((err, con) => {
    checkErr(err);
    con.query(UserTableSQL, (err, data) => {
      checkErr(err)
    });
  });
};
