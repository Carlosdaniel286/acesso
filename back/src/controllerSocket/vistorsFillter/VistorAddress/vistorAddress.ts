/////'inside'

import { Socket } from "socket.io";
import { handleVistorsAddress } from "../../../service/Vistors/fillterVistorsEnter/vistorAddress/visitorAddress";

export const vistorsAddress = async (socket: Socket) => {
  socket.on("inside", async (id:number) => {
    try {
     const address = await handleVistorsAddress(id)
    
      socket.emit("inside", address);
    } catch (err) {
      socket.emit("inside", err);
    }
  });
};
