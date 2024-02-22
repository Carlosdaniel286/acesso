import { DataFilter } from "../service/Vistors/fillterVistorsEnter/filter/main";
import { Datafilter } from "../types/fillter";
import { Socket } from "socket.io";
import prisma from "../database/prisma";

export const fillterVistors = async (socket: Socket) => {
  socket.on("filltervisitor", async (fillter: Datafilter) => {
    try {
      const conect = await prisma;
      if (!conect) return socket.emit("getvisitors", []);
      const dataFilter = new DataFilter(fillter, conect);
      const fillters = await dataFilter.HandleDataFilter();

      socket.emit("getvisitors", fillters);
    } catch (err) {
      socket.emit("getvisitors", err);
    }
  });
};
