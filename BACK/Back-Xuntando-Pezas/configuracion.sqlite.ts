/*ARCHIVO CREADO POR VANESSA */
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

sqlite3.verbose();

export const conectarDB = async () => {
  const db = await open({
    filename: './basedatos.db',
    driver: sqlite3.Database
  });

  // Crear tabla si no existe
  await db.exec(`
    CREATE TABLE IF NOT EXISTS customers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      address TEXT NOT NULL,
      corporation TEXT NOT NULL,
      role TEXT NOT NULL
    );
  `);


   // Insertar datos de ejemplo si no hay registros
   const count = await db.get(`SELECT COUNT(*) as total FROM customers`);
   if (count.total === 0) {
     await db.run(`
       INSERT INTO customers (name, email, address, corporation, role)
       VALUES
         ('Ana García', 'ana@example.com', 'Calle Falsa 123', 'Balidea', 'Bot Analyst'),
         ('Luis Pérez', 'luis@example.com', 'Av. Siempre Viva 456', 'Altia', 'Reporter');
     `);
   }

   
  return db;
};

