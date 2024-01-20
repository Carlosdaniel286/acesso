import { DataFilter } from "../service/fillter/main";
import { Datafilter } from "../types/fillter";
import {  Socket } from "socket.io";
import prisma from "../database/prisma";

export const fillterVistors = async ( socket: Socket) => {
  socket.on("filltervisitor", async (fillter:Datafilter) => {
    try {
      console.log(fillter)
      const dataFilter = new DataFilter(fillter,prisma)
      const fillters = await dataFilter.HandleDataFilter()
      console.log(fillters)

      socket.emit("getvisitors", fillters);
    } catch (err) {
      socket.emit("getvisitors", err);
    }
  });
};
