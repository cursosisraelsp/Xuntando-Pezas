-- db/init.sql

DROP TABLE IF EXISTS usuarios;

CREATE TABLE usuarios (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);


CREATE TABLE IF NOT EXISTS Datos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  trabajador TEXT,
  estado_en_empresa TEXT NOT NULL DEFAULT 'Activo',
  vacaciones TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE
);
