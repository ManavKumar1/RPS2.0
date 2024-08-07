import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import gameRouter from "./routes/game.js";
import { socketHandler } from "./socket.js";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/rps", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/game", gameRouter);

socketHandler(io);

const PORT = process.env.PORT || 8080;

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
