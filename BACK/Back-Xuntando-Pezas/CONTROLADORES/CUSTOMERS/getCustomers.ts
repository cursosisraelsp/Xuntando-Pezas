import { Request, Response } from 'express';
import { conectarDB } from '../../configuracion.sqlite';

export const getCustomers = async (req: Request, res: Response) => {
  try {
    const db = await conectarDB();
    const customers = await db.all("SELECT id,name, email, role FROM customers"); 
    res.json(customers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los customers" });
  }
};
