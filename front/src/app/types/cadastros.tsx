import { ReactNode } from "react";


export interface CadastrosProps {
    children: ReactNode;
    Onclik:()=>void
    header:string
    SelectButton:'1'|'2'|'3'
  }
 