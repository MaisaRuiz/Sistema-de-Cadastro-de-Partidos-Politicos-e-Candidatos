// src/controllers/partidoController.js
const PartidoModel = require('../models/partidoModel');

class PartidoController {
  async obterTodos(req, res) {
    try {
      const partidos = await PartidoModel.obterTodos();
      res.json(partidos);
    } catch (erro) {
      res.status(500).json({ erro: erro.message });
    }
  }

  async obterPorId(req, res) {
    const { id } = req.params;
    try {
      const partido = await PartidoModel.obterPorId(id);
      if (!partido) {
        return res.status(404).json({ erro: "Partido não encontrado" });
      }
      res.json(partido);
    } catch (erro) {
      res.status(500).json({ erro: erro.message });
    }
  }

  async adicionar(req, res) {
    const { nome, sigla, numero_registro } = req.body;
    try {
      const novoPartido = await PartidoModel.adicionar({ nome, sigla, numero_registro });
      return res.status(201).json({ message: 'Partido cadastrado com sucesso!'});
    } catch (erro) {
      res.status(500).json({ erro: erro.message });
    }
  }

  async atualizar(req, res) {
    const { id } = req.params;
    const { nome, sigla, numero_registro } = req.body;
    try {
      const partidoAtualizado = await PartidoModel.atualizar(id, { nome, sigla, numero_registro });
      return res.status(201).json({ message: 'Partido atualizado com sucesso!'});
    } catch (erro) {
      res.status(500).json({ erro: erro.message });
    }
  }

  async excluir(req, res) {
    const { id } = req.params;
    try {
      const partidoExistente = await PartidoModel.obterPorId(id);
      if (!partidoExistente) {
        return res.status(404).json({ erro: 'Partido não encontrado!' });
      }
  
      await PartidoModel.excluir(id);
      return res.status(200).json({ message: 'Partido excluído com sucesso!' });
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
  
}

module.exports = PartidoController;
