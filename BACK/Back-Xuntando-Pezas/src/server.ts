import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Obtener __dirname para módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Rutas y archivo datos.json
const publicPath = path.join(__dirname, '../public');
const archivoDatos = path.join(__dirname, '../datos.json');

// Middleware
app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Página principal
app.get('/', (_req, res) => {
  res.sendFile(path.join(publicPath, 'formulario.html'));
});

// Procesar formulario clásico (HTML form submit)
app.post('/procesar-formulario', (req, res) => {
  try {
    const nuevoDato = req.body;
    console.log('Datos recibidos en /procesar-formulario:', nuevoDato);

    let datos = [];
    if (fs.existsSync(archivoDatos)) {
      const contenido = fs.readFileSync(archivoDatos, 'utf-8');
      if (contenido.trim()) datos = JSON.parse(contenido);
    }

    datos.push(nuevoDato);
    fs.writeFileSync(archivoDatos, JSON.stringify(datos, null, 2));

    console.log('Datos guardados:', nuevoDato);
    res.send('Datos guardados en archivo JSON correctamente');
  } catch (error) {
    console.error('Error al procesar formulario:', error);
    res.status(500).send('Error al procesar formulario');
  }
});

// Procesar datos enviados con fetch (JSON)
app.post('/guardarDatos', (req, res) => {
  try {
    const nuevoDato = req.body;
    console.log('Datos recibidos con fetch en /guardarDatos:', nuevoDato);

    let datos = [];
    if (fs.existsSync(archivoDatos)) {
      const contenido = fs.readFileSync(archivoDatos, 'utf-8');
      if (contenido.trim()) datos = JSON.parse(contenido);
    }

    datos.push(nuevoDato);
    fs.writeFileSync(archivoDatos, JSON.stringify(datos, null, 2));

    console.log('Datos guardados en archivo:', nuevoDato);
    res.status(200).json({ mensaje: 'Datos guardados correctamente' });
  } catch (error) {
    console.error('Error al guardar datos con fetch:', error);
    res.status(500).json({ mensaje: 'Error al guardar datos' });
  }
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});




