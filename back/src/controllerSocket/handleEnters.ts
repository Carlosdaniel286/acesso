import { Server, Socket } from "socket.io";

export const handleEventEnters = (io: Server, socket: Socket) => {
  const userId = Number(socket.handshake.query.userId as string)
  socket.on("visitors", async (newVisitor) => {
    try {
      
    } catch (error) {
      console.error("Erro ao processar visita:", error);
      io.emit("getvisitors", "Erro ao processar visita.");
    }
  });
};
