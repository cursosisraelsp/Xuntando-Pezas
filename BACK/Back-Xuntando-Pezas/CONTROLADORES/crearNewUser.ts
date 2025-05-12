import { Request, Response } from "express";
import { execucionTodoBBDD } from "../instruccions.base.sqlite";
import path from "path";
import fs from "fs";

export const crearNewUser = async (req: Request, res: Response) => {
  try {
    const { nombre, apellidos, email, profesion, rol } = req.body;
    const archivoImagen = req.file; // viene de multer

    // Ruta donde guardamos la imagen
    let rutaFinalImagen = "";
    if (archivoImagen) {
      const carpetaDestino = path.join(__dirname, "../../public/imagenes");
      if (!fs.existsSync(carpetaDestino)) fs.mkdirSync(carpetaDestino, { recursive: true });

      rutaFinalImagen = path.join("imagenes", archivoImagen.filename);
    }

    const instanciaBBDD = execucionTodoBBDD();
    const crud = instanciaBBDD;

    const sql = `
      INSERT INTO CLIENTE (
        NAME_CLIENTE,
        APELIDO1_CLIENTE,
        EMAIL_CLIENTE,
        PROFESION_CLIENTE,
        ROL_CLIENTE,
        EMPRESA_CLIENTE
        
      )
      VALUES (
        '${nombre}',
        '${apellidos}',
        '${email}',
        '${profesion}',
        '${rol}',
        'Particular'
       
      );
    `;

    await crud.insertar(sql);

    res.status(201).json({
      mensaje: "Cliente creado correctamente",
      imagen: rutaFinalImagen || null,
    });
  } catch (error) {
    console.error("💥 Error al crear cliente:", error);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};
