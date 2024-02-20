import { Server, Socket } from "socket.io";
import { newEntry } from "../service/controllerVisters/newEnter";
import { visitorAddres } from "../types/vistors";
import prisma from "../database/prisma";

 type newEnters={
  address:visitorAddres[],
  visitorId: number,
 }


export const handleEventEnters = (io: Server, socket: Socket) => {
  const userId = Number(socket.handshake.query.userId as string)
  socket.on("visitorsEnter", async (newVisitor:newEnters) => {
    try {
      console.log(newVisitor)
      const connect = await prisma
      if(!connect) return io.emit("", "Erro ao processar visita.")
      const newEnter = new newEntry(newVisitor.visitorId,newVisitor.address,connect)
      const response = await newEnter.NewEntry()
      if(!response.success) return io.emit("", "Erro ao processar visita.");
      io.emit("", "");
    } catch (error) {
      console.error("Erro ao processar visita:", error);
      io.emit("", "Erro ao processar visita.");
    }
  });
};
