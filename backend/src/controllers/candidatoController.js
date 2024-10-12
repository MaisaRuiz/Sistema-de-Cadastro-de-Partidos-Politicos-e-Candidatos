// src/controllers/candidatoController.js
const CandidatoModel = require('../models/candidatoModel');

class CandidatoController {
  async obterTodos(req, res) {
    try {
      const candidatos = await CandidatoModel.obterTodos();
      res.json(candidatos);
    } catch (erro) {
      res.status(500).json({ erro: erro.message });
    }
  }

  async obterPorId(req, res) {
    const { id } = req.params;
    try {
      const candidato = await CandidatoModel.obterPorId(id);
      if (!candidato) {
        return res.status(404).json({ erro: "Candidato não encontrado" });
      }
      res.json(candidato);
    } catch (erro) {
      res.status(500).json({ erro: erro.message });
    }
  }

  async adicionar(req, res) {
    const { nome, partido_id, numero_candidato } = req.body;
    try {
      const novoCandidato = await CandidatoModel.adicionar({ nome, partido_id, numero_candidato });
      return res.status(201).json({ message: 'Candidato cadastrado com sucesso!' });
    } catch (erro) {
      res.status(500).json({ erro: erro.message });
    }
  }

  async atualizar(req, res) {
    const { id } = req.params;
    const { nome, partido_id, numero_candidato } = req.body;
    try {
      // Verifique se o candidato existe antes de atualizar
      const candidatoExistente = await CandidatoModel.obterPorId(id);
      if (!candidatoExistente) {
        return res.status(404).json({ erro: "Candidato não encontrado" });
      }

      await CandidatoModel.atualizar(id, { nome, partido_id, numero_candidato });
      return res.status(200).json({ message: 'Candidato alterado com sucesso!' });
    } catch (erro) {
      res.status(500).json({ erro: erro.message });
    }
  }

  async excluir(req, res) {
    const { id } = req.params;
    try {
      // Verifique se o candidato existe antes de excluir
      const candidatoExistente = await CandidatoModel.obterPorId(id);
      if (!candidatoExistente) {
        return res.status(404).json({ erro: "Candidato não encontrado" });
      }

      await CandidatoModel.excluir(id);
      return res.status(204).json({ message: 'Candidato excluído com sucesso!' });
    } catch (erro) {
      res.status(500).json({ erro: erro.message });
    }
  }
}

module.exports = CandidatoController;
