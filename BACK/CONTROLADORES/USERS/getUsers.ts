import { Request, Response } from 'express';
import { getDb } from '../../configuracion/configuracion.db';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const db = await getDb();
    const users = await db.all('SELECT * FROM usuarios');

    res.status(200).json(users);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

