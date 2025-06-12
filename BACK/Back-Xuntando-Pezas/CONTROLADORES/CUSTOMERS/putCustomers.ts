import { Request, Response } from 'express';
import { conectarDB } from '../../configuracion.sqlite';

export const putCustomers = async (req: Request, res: Response) => {
    const {id} = req.params;
    const {outronome,EMAIL,ROLE} = req.body
    console.log(id,req.body)
    type datoArray = [outronome:string,EMAIL:string,ROLE:string,id:string]
    const datosEntrada: datoArray=[
        outronome,
        EMAIL,
        ROLE,
        id
    ]
   
  try {
     console.log("Array ",datosEntrada)
    const db = await conectarDB();
    //const customers = await db.run("update CUSTOMERS (NAME, EMAIL, ROLE) SET NAME = ?,EMAIL = ?,ROLE = ? WHERE id = ?",datosEntrada); 
    res.send({mensaxe:"datos modificados"})
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los customers" });
  }
};
