import { Server, Socket } from "socket.io";
import { getCache } from "../../cache/newCache";


export const handleCache = async (io: Server) => {
  try {
   io.on('cache' ,(async(id:number)=>{
    const state = await getCache(id.toString());

    if (!state) {
      io.emit('cache', '');
    } else {
      io.emit('cache', state);
    }
}))

} catch (error) {
    console.error("Erro ao processar visita:", error);
    // Aqui, em vez de enviar uma resposta HTTP com res.status(), emitimos um evento de erro para o cliente
    io.emit('cache_error', 'Erro ao processar visita');
  }

};
