import { getVisitors } from "../service/Vistors/getvistors/getVisitor";
import { creatAddres, creatResdents } from "../service/user/creatUser";
import { Socket } from "socket.io";

export const handleGetVisitorEvent = async (socket: Socket) => {
  socket.on("getvisitor", async (msg) => {
    try {
      const visitor = await getVisitors();
      socket.emit("getvisitors", visitor);
    } catch (err) {
      console.log("oii");
      socket.emit("getvisitors", err);
    }
  });
};
