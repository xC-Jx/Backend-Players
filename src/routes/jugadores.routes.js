const { Router } = require("express");
const {
  getPlayers,
  createPlayer,
  deletePlayer,
} = require("../controllers/jugadores.controllers");

const router = Router();

//Vamos a utirlizar la constante y le asignamos su controlador
router.get("/kevin", getPlayers);
router.post("/kevin", createPlayer);
router.delete("/kevin/:id", deletePlayer);

module.exports = router;
