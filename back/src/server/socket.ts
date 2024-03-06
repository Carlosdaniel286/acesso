import { Socket, Server } from "socket.io";
import { handleCache } from "../controller/handeControll/handleControlCache";
export const userRouterSocket = (io: Server) => {
  io.on("connection", (socket) => {
    handleCache(io);

    socket.on("disconnect", () => {
      console.log("Cliente desconectado");
    });
  });
};
