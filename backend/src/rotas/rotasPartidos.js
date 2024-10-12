const express = require("express");
const PartidoController = require("../controllers/partidoController");
const router = express.Router();
const partidoController = new PartidoController();

router.get("/partido", partidoController.obterTodos);
router.get("/partido/:id", partidoController.obterPorId);
router.post("/partido", partidoController.adicionar);
router.put("/partido/:id", partidoController.atualizar);
router.delete("/partido/:id", partidoController.excluir);

module.exports = router;
