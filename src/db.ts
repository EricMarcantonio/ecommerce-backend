import mysql from "mysql";

export const DB_POOL = mysql.createPool({
  host: "127.0.0.1",
  user: "local",
  password: "mypass",
  database: "ecommerce",
});
