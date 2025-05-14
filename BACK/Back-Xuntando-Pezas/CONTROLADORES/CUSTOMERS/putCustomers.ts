import { Request, Response } from 'express';
import { conectarDB } from '../../configuracion.sqlite';

export const putCustomers = async (req: Request, res: Response) => {
    const {id} = req.params;
    const {name,email,role,status} = req.body
    console.log(id,req.body)
    type datoArray = [string,string,string,string]
    const datosEntrada: datoArray = [name,email,role,id]
   
  try {
     console.log("Array ",datosEntrada)
    const db = await conectarDB();
    const customers = await db.run("update CUSTOMERS SET NAME = ?,EMAIL = ?,ROLE = ? WHERE id = ?",datosEntrada); 
    res.send({mensaxe:"datos modificados"})
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los customers" });
  }
};
