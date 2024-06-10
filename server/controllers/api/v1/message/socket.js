import { Server } from "socket.io";

const socketHandler = (server) => {
  const io = new Server(server, {
    cors: {
      origin: ["http://localhost:3000"],
    },
  });

  io.on("connection", (socket) => {
    console.log("socket connection established");
    socket.emit("connected");
    socket.on("userConnected", (userInfo) => {});
    socket.on("userDisconnected", (userId) => {
      console.log("user is disconnected", userId);
    });
    socket.on("sendMessage", (data) => {
      socket.to(data.receiver).emit("messageReceived", data);
      socket.emit("messageReceived", data);
    });
    socket.on("deleteMessage", (data) => {
      socket.to(data.receiver).emit("messageDeleted", data.messages);
      socket.emit("messageDeleted", data.messages);
    });
    socket.on("editMessage", (data) => {
      socket.emit("messageEdited", data);
      socket.to(data.receiver).emit("messageEdited", data);
    });
  });
};

export default socketHandler;