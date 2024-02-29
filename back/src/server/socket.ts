import { Server, Socket } from "socket.io";
import { handleGetVisitorEvent } from "../controllerSocket/getVisitor";
import { handleCreateVisitorEvent } from "../controllerSocket/socketsCreatVistors";
import { fillterVistors } from "../controllerSocket/fillter";
import { handleEventEntersVisitor } from "../controllerSocket/handleEnters";
import { Vistors_Inside } from "../controllerSocket/vistorsFillter/inside";
import {vistorsAddress}  from '../controllerSocket/vistorsFillter/VistorAddress/vistorAddress'
import { handleEventExitVistor } from "../controllerSocket/handleVistorExit/handleVistorExit";
import { handleEventCache } from "../controllerSocket/handeControll/handleControll";

export const sockets = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    
    handleGetVisitorEvent(socket)
    handleCreateVisitorEvent(io, socket);
    fillterVistors(socket)
    handleEventEntersVisitor(io,socket)
    Vistors_Inside(socket)
    vistorsAddress(socket)
    handleEventExitVistor(io,socket)
    handleEventCache(io,socket)
  });
};
