/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useParams } from "next/navigation";
import Link from "next/link";
export default function RenderEveryVistor() {
    const params=useParams() 
    const name = params.user[0]
   return (
    <li>
      <Link
        href={`/sistema/registros/todos/${name}`}
        style={{
          textDecoration: "none",
          textTransform: "capitalize",
          color: "white",
        }}
      >
        todos os vistantes
      </Link>
    </li>
  );
}
