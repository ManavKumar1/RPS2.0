export const socketHandler = (io) => {
  io.on("connection", (socket) => {
    console.log("a user connected:", socket.id);

    socket.on("createRoom", (room) => {
      socket.join(room);
      console.log(`User ${socket.id} created and joined room ${room}`);
    });

    socket.on("joinRoom", (room) => {
      socket.join(room);
      console.log(`User ${socket.id} joined room ${room}`);
    });

    socket.on("play", ({ room, choice }) => {
      socket.to(room).emit("opponentChoice", choice);
    });

    socket.on("disconnect", () => {
      console.log("user disconnected:", socket.id);
    });
  });
};
