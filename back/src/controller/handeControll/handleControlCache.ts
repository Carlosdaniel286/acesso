import { Server, Socket } from "socket.io";
import { getCache,setCache } from "../../cache/newCache";
type controll={
  id:number,
  controll:'Exit'|'Enter'|''
}

export const handleCache = async (io:Server,socket:Socket) => {
  try {
   socket.on("caches",(async(msg:controll)=>{
    console.log("msg")
    console.log(msg)
    if(msg.controll==''){
        const cache = await getCache(msg.id.toString())
       io.emit(msg.id.toString(),cache)
      }else{
      setCache(msg.id?.toString(), msg.controll);
      io.emit(msg.id.toString(),msg.controll)
      }
      
   
}))

} catch (error) {
    console.error("Erro ao processar visita:", error);
    // Aqui, em vez de enviar uma resposta HTTP com res.status(), emitimos um evento de erro para o cliente
    io.emit('cache_error', 'Erro ao processar visita');
  }

};
