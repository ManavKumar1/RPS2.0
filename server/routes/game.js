import express from "express";
import GameResult from "../models/gameResult.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { player1Choice, player2Choice, result } = req.body;

  const newGameResult = new GameResult({
    player1Choice,
    player2Choice,
    result,
  });

  try {
    await newGameResult.save();
    res.status(201).json(newGameResult);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const gameResults = await GameResult.find();
    res.json(gameResults);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
