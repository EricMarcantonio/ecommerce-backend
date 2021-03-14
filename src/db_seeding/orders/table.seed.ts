import { SendQuery } from "../../db/db";

const OrdersSeedSQL = `CREATE TABLE IF NOT EXISTS orders (
    id          int NOT NULL AUTO_INCREMENT,
    userID      int NOT NULL,
    productID   int NOT NULL,
    PRIMARY KEY(id)
)`;

export interface OrderDataInterface {
  id: number;
  userID: number;
  productID: number;
}
 
export const CreateOrdersTable = (callback?: any) => {
  SendQuery(OrdersSeedSQL, callback);
};
