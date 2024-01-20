import { Server, Socket } from "socket.io";
import { handleGetVisitorEvent } from "../controllerSocket/getVisitor";
import { handleCreateVisitorEvent } from "../controllerSocket/socketsCreatVistors";
import { fillterVistors } from "../controllerSocket/fillter";
export const sockets = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    handleGetVisitorEvent(socket)
    handleCreateVisitorEvent(io, socket);
    fillterVistors(socket)
  });
};
