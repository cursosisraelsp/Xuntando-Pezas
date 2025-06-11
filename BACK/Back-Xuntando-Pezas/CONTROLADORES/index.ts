import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Mensaje recibido:', { name, email, message });

  // Aquí podrías guardar en una base de datos o enviar un correo
  res.status(200).json({ success: true, message: 'Mensaje recibido' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
