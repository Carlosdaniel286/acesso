import { Dispatch, SetStateAction } from "react";
import { addressValue } from "./inputs";

export type inside ={
 Address:addressValue,
 
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
  