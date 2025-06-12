import express, { Request, Response } from 'express';

const router = express.Router();

router.post('/', (req: Request, res: Response) => {
  // tu lógica aquí
  res.send('Login recibido');
});

export default router;
