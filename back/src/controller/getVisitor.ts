
import { getVisitor } from "../service/getVisitor";
import { reqs, reqe } from "../service/creatUser";
import {  Socket } from "socket.io";

export const handleGetVisitorEvent = async ( socket: Socket) => {
  socket.on("getvisitor", async (msg) => {
    try {
      const visitor = await getVisitor();
      socket.emit("getvisitors", visitor);
    } catch (err) {
      socket.emit("getvisitors", err);
    }
  });
};
