import { Request, Response } from "express";
import { execucionTodoBBDD } from "../../instruccions.base.sqlite";
import path from "path";
import fs from "fs";
import { open } from "sqlite";
import sqlite3 from "sqlite3";

sqlite3.verbose();

export const crearNewUser = async (req: Request, res: Response) => {
  const { nombre, apellidos, email, profesion, rol } = req.body;
  const archivoImagen = req.file;

const rutaFinalImagen = archivoImagen
  ? `imagenes/${archivoImagen.filename}`
  : null;


  try {
    if (archivoImagen) {
      const rutaDestino = path.join(__dirname, "../../public/imagenes", archivoImagen.filename);
      fs.renameSync(archivoImagen.path, rutaDestino);
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
      imagen: rutaFinalImagen || null,
    });
  } catch (error) {
    console.error("💥 Error al crear usuario:", error);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

