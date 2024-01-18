import { Server, Socket } from "socket.io";
import { Visitor } from "../service/creatvisitor";
import { visitors } from "../types/vistors";
import { getVisitor } from "../service/getVisitor";

export const handleCreateVisitorEvent = (io: Server, socket: Socket) => {
  const userId = Number(socket.handshake.query.userId as string)
  socket.on("visitors", async (newVisitor: visitors) => {
    try {
      const creatVistors = new Visitor(newVisitor, userId);
      const response = await creatVistors.setNewVisitor();

      if (!response.success) {
        return io.emit("getvisitors", response.message);
      }
      const visitor = await getVisitor();
      io.emit("getvisitors", visitor);
    
    } catch (error) {
      console.error("Erro ao processar visita:", error);
      io.emit("getvisitors", "Erro ao processar visita.");
    }
  });
};
