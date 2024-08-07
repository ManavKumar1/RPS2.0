import mongoose from "mongoose";

const gameResultSchema = new mongoose.Schema({
  player1Choice: String,
  player2Choice: String,
  result: String,
  date: { type: Date, default: Date.now },
});

const GameResult = mongoose.model("GameResult", gameResultSchema);

export default GameResult;
