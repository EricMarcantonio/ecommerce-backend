import { SendQuery } from "../../db/db";


const InsertProductsSQL = [
  `INSERT INTO products (productName, price) VALUES
    ('Lollipop', 1.24)`,
  `INSERT INTO products (productName, price) VALUES
    ('Pop Tart', 2.16)`,
  `INSERT INTO products (productName, price) VALUES
    ('Brownie', 5.21)`,
];

export const InsertProducts = (callback?: any) => {
  for (let eachProduct of InsertProductsSQL) {
    SendQuery(eachProduct, callback);
  }
};
