import { DB_POOL } from "../../db";
import { checkErr } from "../../util";

const OrdersSeedSQL = `CREATE TABLE IF NOT EXISTS orders (
    id          int NOT NULL AUTO_INCREMENT,
    userID      int NOT NULL,
    productID   int NOT NULL UNIQUE,
    productName varchar(128) NOT NULL,
    price       float,
    PRIMARY KEY(id)
)`;

export interface OrderDataInterface {
  id: number;
  userID: number;
  productID: number;
  productNameL: string;
  price: number;
}

export const CreateOrdersTable = () => {
  DB_POOL.getConnection((err, con) => {
    checkErr(err);
    con.query(OrdersSeedSQL, (err, data) => {
      checkErr(err);
    });
  });
};
