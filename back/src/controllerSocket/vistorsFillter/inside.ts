import { Socket } from "socket.io";
import prisma from "../../database/prisma";
import { handleVistorsEnter } from "../../service/Vistors/fillterVistorsEnter/getVistorsEnter";

export const Vistors_Inside = async (socket: Socket) => {
  socket.on("Vistors_inside", async () => {
    try {
      const connect = await prisma;
      if (!connect) return socket.emit("getvisitors", []);
      const enter = new handleVistorsEnter(connect);
      const enters = await enter.getVistorsInside();
      //console.log(enter)
      socket.emit("getvisitors", enters);
    } catch (err) {
      console.log(err);
      socket.emit("getvisitors", err);
    }
  });
};
