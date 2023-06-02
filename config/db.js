import mysql from "mysql2";

const pool = mysql.createPool({
  host: "emocion.pe",
  user: "emocion_user2018",
  password: "Emocion2018$$",
  port: 3306,
  database: "emocion_ventasINP",
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
});

const connectionPool = pool.promise();

export default connectionPool;
