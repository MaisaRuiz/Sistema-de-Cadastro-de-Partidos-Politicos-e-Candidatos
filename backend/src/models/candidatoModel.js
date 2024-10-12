// src/models/candidatoModel.js
const CandidatoDAO = require('../DAO/candidatoDAO');

class CandidatoModel {
  static async obterTodos() {
    return await CandidatoDAO.obterTodos();
  }

  static async obterPorId(id) {
    return await CandidatoDAO.obterPorId(id);
  }

  static async adicionar(candidato) {
    // Lógica de negócio (validações, etc.) aqui
    return await CandidatoDAO.adicionar(candidato);
  }

  static async atualizar(id, candidato) {
    return await CandidatoDAO.atualizar(id, candidato);
  }

  static async excluir(id) {
    return await CandidatoDAO.excluir(id);
  }
}

module.exports = CandidatoModel;
