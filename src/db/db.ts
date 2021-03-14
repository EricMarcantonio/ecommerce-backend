import mysql from "mysql";

export const DB_POOL = mysql.createPool({
  host: "127.0.0.1",
  user: "local",
  password: "mypass",
  database: "ecommerce",
});

export const SendQuery = (query: string, callback?: any) => {
  if (!callback) callback = (data: any) => console.log(data);
  DB_POOL.getConnection((err, con) => {
    if (err) {
      console.error(err);
    } else {
      con.query(query, (err, data) => {
        if (err) {
          console.error(err);
        } else {
          callback(data);
        }
      });
      try {
        con.commit();
        con.release();
      } catch (error) {
        con.release();
      }
    }
  });
};


export enum TABLES {
  users = "users",
  products = "products",
  orders = "orders"
}