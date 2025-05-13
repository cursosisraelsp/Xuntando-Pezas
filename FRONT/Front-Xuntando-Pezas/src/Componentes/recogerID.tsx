import express, { Response } from 'express';

const app = express();
const port = 5000;

type Elemento = {
  id: number;
  name: string;
};

// Simulación de una base de datos
const data: Elemento[] = [
  { id: 1, name: 'Elemento 1' },
  { id: 2, name: 'Elemento 2' },
  { id: 3, name: 'Elemento 3' }
];

// Ruta para obtener los elementos
app.get('/api/elementos', (_, res: Response) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
