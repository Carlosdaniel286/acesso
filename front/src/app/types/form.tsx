import { Dispatch, SetStateAction } from "react";

export type project = {
    name: string;
    cpf: string;
    id: number;
    User:{
      name:string;
    }
    
  };

  export interface Props {
    setHidden: Dispatch<SetStateAction<boolean>>;
  }