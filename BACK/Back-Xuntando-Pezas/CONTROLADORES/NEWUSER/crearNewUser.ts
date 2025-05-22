import { Request, Response } from "express";
import path from "path";
import fs from "fs";
import { open } from "sqlite";
import sqlite3 from "sqlite3";

sqlite3.verbose();

export const crearNewUser = async (req: Request, res: Response) => {
  const { nombre, apellidos, email, profesion, rol } = req.body;
 console.log("🧪 req.headers['content-type']", req.headers['content-type']);
console.log("🧪 req.body:", req.body);
console.log("🧪 req.file:", req.file);

  const archivoImagen = req.file;

let rutaFinalImagen = null;


  try {
    console.log("📸 ARCHIVO IMAGEN:", archivoImagen);
    console.log("📸 RUTA IMAGEN:", archivoImagen?.path);
    if (archivoImagen) {
      //const rutaDestino = path.join(__dirname, "../../public/imagenes", archivoImagen.originalname);
      //fs.renameSync(archivoImagen.path, rutaDestino);
      rutaFinalImagen = archivoImagen.originalname;
   }
    const db = await open({
      filename: "./basedatos.db",
      driver: sqlite3.Database,
    });
console.log("📥 DATOS RECIBIDOS:");
console.log({ nombre, apellidos, email, profesion, rol, imagen: archivoImagen?.filename || null });

    await db.run(`
      INSERT INTO usuario (nombre, apellidos, email, profesion, rol, imagen)
      VALUES (?, ?, ?, ?, ?, ?)
    `, [nombre, apellidos, email, profesion, rol, rutaFinalImagen]);
    
    console.log("✅ Usuario insertado correctamente en la tabla 'usuario'");


    await db.close();

    res.status(201).json({
      mensaje: "Usuario creado correctamente",
      imagen: rutaFinalImagen,
    });
  } catch (error) {
    console.error("💥 Error al crear usuario:", error);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

