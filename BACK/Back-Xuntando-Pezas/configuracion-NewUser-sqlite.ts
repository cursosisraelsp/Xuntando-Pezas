import sqlite3 from "sqlite3";
import { open } from "sqlite";

sqlite3.verbose();

export const crearTablaUsuario = async () => {
  const db = await open({
    filename: "./basedatos.db",
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS usuario (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL,
      apellidos TEXT NOT NULL,
      email TEXT NOT NULL,
      profesion TEXT NOT NULL,
      rol TEXT NOT NULL,
      imagen TEXT
    );
  `);

  await db.close();
};
