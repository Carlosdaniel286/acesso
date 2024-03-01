import { Server, Socket } from "socket.io";
import { getCache } from "../../cache/newCache";


export const handleEventCache = (io: Server, socket: Socket) => {
 socket.on("cache", async (id:number) => {
    try {
      const state = await getCache(id.toString()) as string
      if(!state) return io.emit("cache",'vazio');
      return io.emit("cache",state);
    } catch (error) {
      console.error("Erro ao processar visita:", error);
      io.emit("cache", "Erro ao processar visita.");
    }
  });
};
