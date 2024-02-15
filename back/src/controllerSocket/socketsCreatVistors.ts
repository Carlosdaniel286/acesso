import { Server, Socket } from "socket.io";
import { Visitor } from "../service/creatvisitor";
import { visitors } from "../types/vistors";
import { getVisitor } from "../service/getVisitor";
import prisma from "../database/prisma";
export const handleCreateVisitorEvent = (io: Server, socket: Socket) => {
  const userId = Number(socket.handshake.query.userId as string)
  socket.on("visitors", async (newVisitor:visitors) => {
    try {
      const connect = await prisma
      if(!connect) return
      const creatVistors = new Visitor(newVisitor, userId,connect);
      const response = await creatVistors.setNewVisitor();
      if(response==undefined)  return 
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
