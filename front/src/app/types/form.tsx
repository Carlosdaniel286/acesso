import { Dispatch, SetStateAction } from "react";

export type project = {
    name: string;
    cpf: string;
    id: number;
    license:string;
    User:{
      name:string;
    }
    
  };

  export interface Props {
    setHidden: Dispatch<SetStateAction<boolean>>;
  }