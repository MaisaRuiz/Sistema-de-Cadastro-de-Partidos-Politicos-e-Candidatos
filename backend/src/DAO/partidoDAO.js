// src/DAO/partidoDAO.js
const Conexao = require('./conexao');

class PartidoDAO {
  static async obterTodos() {
    const sql = 'SELECT * FROM partidos';
    const conexao = new Conexao();
    return await conexao.ExecutaComando(sql);
  }

  static async obterPorId(id) {
    const sql = 'SELECT * FROM partidos WHERE id = ?';
    const conexao = new Conexao();
    const resultado = await conexao.ExecutaComando(sql, [id]);
    return resultado.length ? resultado[0] : null;
  }

  static async adicionar(partido) {
    const sql = 'INSERT INTO partidos (nome, sigla, numero_registro) VALUES (?, ?, ?)';
    const conexao = new Conexao();
    const resultado = await conexao.ExecutaComandoNonQuery(sql, [partido.nome, partido.sigla, partido.numero_registro]);
    return resultado;
  }

  static async atualizar(id, partido) {
    const sql = 'UPDATE partidos SET nome = ?, sigla = ?, numero_registro = ? WHERE id = ?';
    const conexao = new Conexao();
    const resultado = await conexao.ExecutaComandoNonQuery(sql, [partido.nome, partido.sigla, partido.numero_registro, id]);
    return resultado;
  }

  static async excluir(id) {
    const sql = 'DELETE FROM partidos WHERE id = ?';
    const conexao = new Conexao();
    return await conexao.ExecutaComandoNonQuery(sql, [id]);
  }
}

module.exports = PartidoDAO;
