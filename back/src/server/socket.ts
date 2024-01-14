import { Server, Socket } from "socket.io";
import { handleGetVisitorEvent } from "../controller/getVisitor";
import { handleCreateVisitorEvent } from "../controller/socketsCreatVistors";

export const sockets = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    handleGetVisitorEvent(socket)
    handleCreateVisitorEvent(io, socket);
  });
};
