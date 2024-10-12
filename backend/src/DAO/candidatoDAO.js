// src/DAO/candidatoDAO.js
const Conexao = require('./conexao');

class CandidatoDAO {
  static async obterTodos() {
    const sql = 'SELECT * FROM candidatos';
    const conexao = new Conexao();
    return await conexao.ExecutaComando(sql);
  }

  static async obterPorId(id) {
    const sql = 'SELECT * FROM candidatos WHERE id = ?';
    const conexao = new Conexao();
    const resultado = await conexao.ExecutaComando(sql, [id]);
    return resultado.length ? resultado[0] : null;
  }

  static async adicionar(candidato) {
    const sql = 'INSERT INTO candidatos (nome, partido_id, numero_candidato) VALUES (?, ?, ?)';
    const conexao = new Conexao();
    const resultado = await conexao.ExecutaComandoNonQuery(sql, [candidato.nome, candidato.partido_id, candidato.numero_candidato]);
    return resultado;
  }

  static async atualizar(id, candidato) {
    const sql = 'UPDATE candidatos SET nome = ?, partido_id = ?, numero_candidato = ? WHERE id = ?';
    const conexao = new Conexao();
    const resultado = await conexao.ExecutaComandoNonQuery(sql, [candidato.nome, candidato.partido_id, candidato.numero_candidato, id]);
    return resultado;
  }

  static async excluir(id) {
    const sql = 'DELETE FROM candidatos WHERE id = ?';
    const conexao = new Conexao();
    return await conexao.ExecutaComandoNonQuery(sql, [id]);
  }
}

module.exports = CandidatoDAO;
