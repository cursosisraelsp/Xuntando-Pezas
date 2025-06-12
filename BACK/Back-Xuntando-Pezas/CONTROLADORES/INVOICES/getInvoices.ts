import { Request, Response } from 'express';
import * as sqlite3 from 'sqlite3';
import path from 'path';

sqlite3.verbose();
const rutaDB = path.join(__dirname, '..', '..', 'basedatos.db');

const db: sqlite3.Database = new sqlite3.Database(rutaDB, (err) => {
  if (err) {
    console.error('Error al conectar a basedatos.db', err);
  } else {
    console.log('Conectado a la base de datos');
  }
});

// Convertir db.all() en una función que devuelva promesas
function getAllInvoices() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM invoices ORDER BY date DESC", (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

export const getInvoices = async (req: Request, res: Response) => {
  try {
    const invoices = await getAllInvoices();
    res.json(invoices);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las facturas" });  
    }
}