import express from 'express';
import sqlite3 from 'sqlite3';
import path from 'path';

const router = express.Router();

// Interface para o tipo de datos que veñen da base de datos
interface ProductoDB {
    id: number;
    nome: string;
    codigo: string;
    stock: number;
    tipo: string;
    peso: number;
    precio: number;
    image_url: string;
}

const dbPath = path.resolve(__dirname, '../datos/productos.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Erro ao conectar coa base de datos SQLite:", err.message);
    } else {
        console.log("Conectado á base de datos de produtos:", dbPath);
    }
});

router.get('/productos', (req, res) => {
    const sql = "SELECT * FROM productos";
    db.all(sql, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });

        const dbRows = rows as ProductoDB[];

        const products = dbRows.map(p => ({
            id: p.id,
            name: p.nome,
            code: p.codigo,
            stock: p.stock,
            type: p.tipo,
            weight: p.peso,
            price: p.precio,
            imageUrl: p.image_url
        }));

        res.json(products);
    });
});

router.get('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const sql = "SELECT * FROM productos WHERE id = ?";
    db.get(sql, [id], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!row) return res.status(404).json({ message: "Produto non atopado" });

        const p = row as ProductoDB;

        res.json({
            id: p.id,
            name: p.nome,
            code: p.codigo,
            stock: p.stock,
            type: p.tipo,
            weight: p.peso,
            price: p.precio,
            imageUrl: p.image_url
        });
    });
});

export default router;
