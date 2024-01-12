import { Server, Socket } from "socket.io";
import { getVisitor } from "../service/getVisitor";
import { visitors } from "../types/vistors";
import { Visitor } from "../service/creatvisitor";

export const sockets =(io:Server)=>{

    io.on("connection", (socket: Socket) => {
       
         socket.on("getvisitor",async (msg) => {
            const visitor = await getVisitor()
            socket.emit('getvisitors', visitor)
         });

         socket.on("visitors",async (msg:visitors) => {
            const lt = Number(msg.address.lt)
            const qd = Number(msg.address.qd)
            const address ={ qd , lt}
            const clone = {...msg,address}
            const creatVistors = new Visitor(clone)
            await creatVistors.setNewVisitor()
            const visitor = await getVisitor()
            
            io.emit('getvisitors', visitor)
         });

        
        
       });
}