import { Socket, Server } from "socket.io";
import { handleCache } from "../controller/handeControll/handleControlCache";
export const userRouterSocket = (io: Server) => {
  io.on("connection", (socket:Socket) => {
    console.log("Cliente conectado  " + socket.id);
    handleCache(io,socket);

    socket.on("disconnect", () => {
      console.log("Cliente desconectado");
    });
  });
};
