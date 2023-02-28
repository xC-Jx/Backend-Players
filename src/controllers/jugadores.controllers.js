const Jugador = require("../models/Jugadores");

const getPlayers = async (_, res) => {
  try {
    const players = await Jugador.find();
    res.status(200).json({
      message: "Todo está funcionando bien",
      ok: true,
      players,
    });
    console.log(players);
  } catch (error) {
    console.log(error);
  }
};

const createPlayer = async (req, res) => {
  try {
    const player = new Jugador(req.body);
    await player.save();
    res.status(200).json({
      ok: true,
      player,
    });
  } catch (error) {
    console.log(error);
  }
};

const deletePlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const player = await Jugador.findByIdAndDelete(id);
    if (!player) {
      return res.status(404).json({
        ok: false,
        message: "No se encontró al jugador",
      });
    }
    res.status(200).json({
      ok: true,
      message: "Jugador eliminado correctamente",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getPlayers, createPlayer, deletePlayer };
