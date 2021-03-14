import { SendQuery } from "../../db/db";

const InsertOrdersSQL = [
  `INSERT INTO orders (userID, productID)
    VALUES (1, 1)`,
  `INSERT INTO orders (userID, productID)
    VALUES (1, 2)`,
  `INSERT INTO orders (userID, productID)
  VALUES (2, 3)`,
  `INSERT INTO orders (userID, productID)
  VALUES (2, 2)`,
  `INSERT INTO orders (userID, productID)
  VALUES (2, 1)`,
  `INSERT INTO orders (userID, productID)
  VALUES (1, 1)`,
];

export const InsertOrders = (callback?: any) => {
  for (let eachOrder of InsertOrdersSQL) {
    SendQuery(eachOrder, callback);
  }
};
