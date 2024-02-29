import { Server, Socket } from "socket.io";
import { newEntry } from "../service/Vistors/newEnter/newEnter";
import { visitorAddres } from "../types/vistors";
import prisma from "../database/prisma";

export type newEnters = {
  address: visitorAddres[];
  visitorId: number;
};

export const handleEventEntersVisitor = (io: Server, socket: Socket) => {
  const userId = Number(socket.handshake.query.userId as string);
  socket.on("visitorsEnter", async (newVisitor: newEnters) => {
    try {
      console.log(newVisitor);
      const connect = await prisma;
      if (!connect) return io.emit("response", 'erro de conexão');
      const newEnter = new newEntry(
        newVisitor.visitorId,
        newVisitor.address,
        connect
      );
      const response = await newEnter.NewEntry();
      if (!response.success) return io.emit("response", response);
      return io.emit("response", response);
    } catch (error) {
      console.error("Erro ao processar visita:", error);
      return io.emit("response", 'Erro ao processar visita');
    }
  });
};
