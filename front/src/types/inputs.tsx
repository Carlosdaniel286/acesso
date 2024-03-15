import { inside } from "./form"
export type addressValue={
    qd: number | ''
    lt: number | ''

}

export type Inputs ={
    cpf: string;
    cnh: string;
    id:number;
    name: string;
    password: string;
    address:addressValue[]
    phone:string
}