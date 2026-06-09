import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('copa_conect.db');

export function criarTabela() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS servicos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      categoria TEXT,
      telefone TEXT,
      descricao TEXT
    );
  `);
}

export function inserirServico(
  nome: string,
  categoria: string,
  telefone: string,
  descricao: string
) {
  db.runSync(
    `INSERT INTO servicos (nome, categoria, telefone, descricao)
     VALUES (?, ?, ?, ?)`,
    [nome, categoria, telefone, descricao]
  );
}

export function listarServicos() {
  return db.getAllSync(
    `SELECT * FROM servicos ORDER BY id DESC`
  );
}

export function excluirServico(id: number) {
  db.runSync(
    `DELETE FROM servicos WHERE id = ?`,
    [id]
  );
}

export function atualizarServico(
  id: number,
  nome: string,
  categoria: string,
  telefone: string,
  descricao: string
) {
  db.runSync(
    `UPDATE servicos
     SET nome = ?, categoria = ?, telefone = ?, descricao = ?
     WHERE id = ?`,
    [nome, categoria, telefone, descricao, id]
  );
}