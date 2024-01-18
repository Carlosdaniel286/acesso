import { getVisitor } from "../service/getVisitor";
import { reqs, reqe } from "../service/creatUser";
import {  Socket } from "socket.io";

export const fillterVistors = async ( socket: Socket) => {
  socket.on("filltervisitor", async (fillter) => {
    try {
      
      socket.emit("getvisitors", '');
    } catch (err) {
      socket.emit("getvisitors", err);
    }
  });
};
