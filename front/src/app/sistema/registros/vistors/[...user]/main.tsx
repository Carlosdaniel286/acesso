"use client";

import Scroll from "../../components/scroll/sroll";
import { ConnectSoket } from "../../../context/socket";
import React from "react";
//"Vistors_inside"

export default function DisplayEnteredVisitor() {
  const { socket } = ConnectSoket();
  const request = () => {
    if (!socket) return;
   // socket.emit("Vistors_inside", "");
  };
  return (
    <>
      <Scroll DiplayInfo={request} />
    </>
  );
}
