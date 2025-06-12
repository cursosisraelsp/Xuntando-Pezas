import { Request, Response } from 'express';
import { conectarDB } from '../../configuracion.sqlite';

export const deleteCustomers = async (req: Request, res: Response) => {
    const {id} = req.params;
    
    
   
  try {
     
    const db = await conectarDB();
    const customers = await db.run("DELETE FROM CUSTOMERS WHERE id = ?",[id]); 
    res.send({mensaxe:"datos BORRADOS"})
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los customers" });
  }
};