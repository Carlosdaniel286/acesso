import {  Server, Socket } from "socket.io";
import { getVisitor } from "../service/getVisitor";
import { visitors } from "../types/vistors";
import { Visitor } from "../service/creatvisitor";



export const sockets =(io:Server)=>{

    io.on("connection", (socket: Socket) => {
      const userId = socket.handshake.query.userId as string
     
      socket.on("getvisitor",async (msg) => {
               try{
                console.log(msg)
                console.log(userId)
               const visitor = await getVisitor()
               socket.emit('getvisitors', visitor)
            }catch(err){
               socket.emit('getvisitors', err)
            }
            
         })

         socket.on("visitors", async (msg: visitors) => {
            try {
              const creatVistors = new Visitor(msg,Number(userId));
              const response = await creatVistors.setNewVisitor();
             
              if (!response.success) {
               return io.emit('getvisitors', response.message);
              }
          
              const visitor = await getVisitor();
              io.emit('getvisitors', visitor);
            } catch (error) {
              console.error('Erro ao processar visita:', error);
              io.emit('getvisitors', 'Erro ao processar visita.');
            }
          });
      });
}