import { Dispatch, SetStateAction } from "react";
import { addressValue } from "./inputs";
//resident: {…}, residentId: 85, createdAt:
export type inside ={
 address:addressValue,
 createdAt:string,
 residentId: number;
 visitorId: number;
 day:number,
 month:number,
 years:number,
 }




export type project = {
    name: string;
    cpf: string;
    id: number;
    license:string;
    image: string,
    user:{
      name:string;
    }
    
  };

  export type everyVistors ={
    visitor: project[],
    createdAt: Date
    controll: string
  }

 
  
  
  export interface Props {
    setHidden: Dispatch<SetStateAction<boolean>>;
  }
  