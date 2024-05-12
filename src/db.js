import pg from "pg";

export const pool = new pg.Pool({
  port: 5432,
  host: "localhost", // Usando localhost ya que el puerto está mapeado al host
  user: "alumno",
  password: "123456",
  database: "control-pagos-db",
});

pool.on("connect", () => {
  console.log("Base de datos conectada");
});
