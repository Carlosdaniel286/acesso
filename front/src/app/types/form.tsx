import { Dispatch, SetStateAction } from "react";
import { addressValue } from "./inputs";
//resident: {…}, residentId: 85, createdAt:
export type inside ={
 Address:addressValue,
 createdAt:string
 
}
export type project = {
    name: string;
    cpf: string;
    id: number;
    license:string;
    inside:inside[];
    User:{
      name:string;
    }
    
  };

  export interface Props {
    setHidden: Dispatch<SetStateAction<boolean>>;
  }
  