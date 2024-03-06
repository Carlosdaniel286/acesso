'use client'
import { useEffect } from "react";
import style from "./style/renderVistor.module.css";
import Link from "next/link";
import { useParams } from "next/navigation";
///sistema/registros/vistors
export default function RenderInside() {
  const params=useParams() 
  const nome = params.user[0]

  return (
    <li>
      <Link
        href={`/sistema/registros/vistors/${nome}`}
        style={{
          textDecoration: "none",
          textTransform: "capitalize",
          color: "white",
        }}
      >
        entrada
      </Link>
    </li>
  );
}
