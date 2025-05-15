import express, { Request, Response } from 'express';
import { Database, open } from 'sqlite';
import sqlite3 from 'sqlite3';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

let db: Database;

// Inicializar la base de datos SQLite
const initializeDatabase = async () => {
  try {
    db = await open({
      filename: process.env.DB_NAME || './mydb.sqlite',
      driver: sqlite3.Database,
    });
    console.log('Conexión a la base de datos SQLite establecida correctamente');

    await db.exec(`
      CREATE TABLE IF NOT EXISTS customers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        company_name TEXT,
        company_vat TEXT,
        company_address TEXT,
        company_city TEXT,
        shipping_name TEXT,
        shipping_vat TEXT,
        shipping_address TEXT,
        shipping_city TEXT
      );

      CREATE TABLE IF NOT EXISTS invoices (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        is_recurring INTEGER NOT NULL,
        customer_id INTEGER NOT NULL,
        invoice_number TEXT NOT NULL,
        invoice_date TEXT NOT NULL,
        payment_term TEXT NOT NULL,
        due_date TEXT NOT NULL,
        FOREIGN KEY (customer_id) REFERENCES customers(id)
      );

      CREATE TABLE IF NOT EXISTS invoice_items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        invoice_id INTEGER NOT NULL,
        service_product TEXT NOT NULL,
        quantity INTEGER NOT NULL,
        price REAL NOT NULL,
        unit TEXT NOT NULL,
        vat_rate INTEGER NOT NULL,
        total REAL NOT NULL,
        FOREIGN KEY (invoice_id) REFERENCES invoices(id)
      );

      CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
      );
    `);
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
    process.exit(1);
  }
};

// Interfaces
interface InvoiceData {
  isRecurringInvoice: boolean;
  customerId: string;
  invoiceNumber: string;
  invoiceDate: string;
  paymentTerm: string;
  dueDate: string;
  invoiceItems: InvoiceItem[];
}

interface InvoiceItem {
  id: number;
  serviceProduct: string;
  quantity: number;
  price: number;
  unit: string;
  vatRate: number;
  total: number;
}

// Endpoints
app.post('/invoices', async (req: Request, res: Response) => {
  try {
    const invoiceData: InvoiceData = req.body;

    const invoiceResult = await db.run(
      'INSERT INTO invoices (is_recurring, customer_id, invoice_number, invoice_date, payment_term, due_date) VALUES (?, ?, ?, ?, ?, ?)',
      [
        invoiceData.isRecurringInvoice,
        invoiceData.customerId,
        invoiceData.invoiceNumber,
        invoiceData.invoiceDate,
        invoiceData.paymentTerm,
        invoiceData.dueDate,
      ]
    );
    const invoiceId = invoiceResult.lastID;

    for (const item of invoiceData.invoiceItems) {
      await db.run(
        'INSERT INTO invoice_items (invoice_id, service_product, quantity, price, unit, vat_rate, total) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [invoiceId, item.serviceProduct, item.quantity, item.price, item.unit, item.vatRate, item.total]
      );
    }

    res.status(201).json({ message: 'Factura guardada correctamente', invoiceId });
  } catch (error) {
    console.error('Error al guardar la factura:', error);
    res.status(500).json({ error: 'Error al guardar la factura' });
  }
});

app.get('/customers', async (req: Request, res: Response) => {
  try {
    const result = await db.all(`
      SELECT id, name, company_name, company_vat, company_address, company_city,
             shipping_name, shipping_vat, shipping_address, shipping_city
      FROM customers
    `);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error al obtener los clientes:', error);
    res.status(500).json({ error: 'Error al obtener los clientes' });
  }
});

app.get('/products', async (req: Request, res: Response) => {
  try {
    const result = await db.all('SELECT id, name FROM products');
    res.status(200).json(result);
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
});

// Iniciar servidor
const startServer = async () => {
  await initializeDatabase();
  app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
  });
};

startServer();
