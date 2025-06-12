import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

let db: ReturnType<typeof open> | null = null;

export async function initDb() {
  if (!db) {
    db = await open({
      filename: './database.sqlite',
      driver: sqlite3.Database,
    });
  }
  return db;
}

