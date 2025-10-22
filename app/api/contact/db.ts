import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function getDb() {
  return open({
    filename: './contact_messages.db',
    driver: sqlite3.Database,
  });
}

export async function saveMessage({ name, email, message }: { name: string; email: string; message: string }) {
  const db = await getDb();
  await db.run(
    'CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, message TEXT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)'
  );
  await db.run(
    'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)',
    name,
    email,
    message
  );
}

export async function getMessages() {
  const db = await getDb();
  await db.run(
    'CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, message TEXT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)'
  );
  const rows = await db.all('SELECT id, name, email, message, created_at FROM messages ORDER BY created_at ASC');
  return rows;
}
