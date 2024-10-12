const express = require("express");
const CandidatoController = require("../controllers/candidatoController");
const router = express.Router();
const candidatoController = new CandidatoController();

router.get("/candidato", candidatoController.obterTodos);
router.get("/candidato/:id", candidatoController.obterPorId);
router.post("/candidato", candidatoController.adicionar);
router.put("/candidato/:id", candidatoController.atualizar);
router.delete("/candidato/:id", candidatoController.excluir);

module.exports = router;
