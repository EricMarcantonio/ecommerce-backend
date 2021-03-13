import { DB_POOL } from "../../db";
import { checkErr } from "../../util";

const InsertOrdersSQL = [
  `INSERT IGNORE INTO orders (userID, productID, productName, price)
VALUES (1, 123, 'Lolipops', 1.24)`,
`INSERT IGNORE INTO orders (userID, productID, productName, price)
VALUES (1, 456, 'Candy', 5.24)`,
`INSERT IGNORE INTO orders (userID, productID, productName, price)
VALUES (2, 789, 'Brownie', 2.64)`
];

export const InsertOrders = () => {
  DB_POOL.getConnection((err, con) => {
    checkErr(err);
    for (let eachOrder of InsertOrdersSQL){
        con.query(eachOrder, (err, data) => {
            checkErr(err)
        })
    }
  });
};
