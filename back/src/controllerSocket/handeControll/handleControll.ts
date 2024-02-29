import { Server, Socket } from "socket.io";
import { myCache } from "../../cache/newCache";


export const handleEventCache = (io: Server, socket: Socket) => {
 socket.on("cache", async (id:number) => {
    try {
      const state = myCache.get<string>(id.toString());
      if(!state) return io.emit("cache",'vazio');
      return io.emit("cache",state);
    } catch (error) {
      console.error("Erro ao processar visita:", error);
      io.emit("cache", "Erro ao processar visita.");
    }
  });
};
