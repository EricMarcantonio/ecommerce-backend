import { SendQuery } from "../../db/db";

const CreateProductTableSQL = `CREATE TABLE IF NOT EXISTS products (
    id          int not null auto_increment,
    productName varchar(128),
    price       float,
    primary key (id)
)`;

export interface ProductInterface {
  id: number;
  productName: string;
  price: number;
}

export const CreateProductTable = (callback?: any) => {
  SendQuery(CreateProductTableSQL, callback);
};
