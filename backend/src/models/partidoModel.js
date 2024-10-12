// src/models/partidoModel.js
const PartidoDAO = require('../DAO/partidoDAO');

class PartidoModel {
  static async obterTodos() {
    return await PartidoDAO.obterTodos();
  }

  static async obterPorId(id) {
    return await PartidoDAO.obterPorId(id);
  }

  static async adicionar(partido) {
    return await PartidoDAO.adicionar(partido);
  }

  static async atualizar(id, partido) {
    return await PartidoDAO.atualizar(id, partido);
  }

  static async excluir(id) {
    return await PartidoDAO.excluir(id);
  }
}

module.exports = PartidoModel;
