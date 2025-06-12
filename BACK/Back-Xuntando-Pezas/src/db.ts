import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

const defaultDbPath = path.join(__dirname, '../db/novomilladoiro.sqlite');

export async function openDB(): Promise<any> {
  const db = await open({
    filename: defaultDbPath,
    driver: sqlite3.Database,
  });
  return db;
}

