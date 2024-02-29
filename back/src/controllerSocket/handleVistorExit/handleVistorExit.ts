import { Server, Socket } from "socket.io";
import { Outside,outside } from "../../service/Vistors/newOut/newOut";
import { visitorAddres } from "../../types/vistors";
import prisma from "../../database/prisma";
import { newExitVistor } from "../../service/Vistors/newOut/helper/outSide/handleOutSide";
import { newEnters } from "../handleEnters";

export const handleEventExitVistor = (io: Server, socket: Socket) => {
  const userId = Number(socket.handshake.query.userId as string);
  socket.on("visitorsExit", async (visitor: newEnters) => {
    try {
      console.log(visitor);
      const connect = await prisma;
      if (!connect) return io.emit("response", "Erro ao processar visita.");
       const newExit = new newExitVistor(visitor.visitorId,connect)
       const response = await newExit.NewExit()
      if (!response.success) return io.emit("response", response);
      return io.emit("response", response);
    } catch (error) {
      console.error("Erro ao processar visita:", error);
      io.emit("response", "Erro ao processar visita.");
    }
  });
};
