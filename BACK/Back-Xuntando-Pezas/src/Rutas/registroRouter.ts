import { Router, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const datosPath = path.resolve(__dirname, '../../datos.json');
const router = Router();

router.post('/', (req: Request, res: Response) => {
  const nuevoUsuario = req.body;
  let datos = [];
  if (fs.existsSync(datosPath)) {
    datos = JSON.parse(fs.readFileSync(datosPath, 'utf-8'));
  }
  datos.push(nuevoUsuario);
  fs.writeFileSync(datosPath, JSON.stringify(datos, null, 2));
  res.json({ message: 'Usuario registrado correctamente' });
});

export default router;