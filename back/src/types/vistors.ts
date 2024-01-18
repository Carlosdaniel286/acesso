export type visitor={
    qd:number,
     lt:number
 }
export type visitors ={
    name:string,
    cpf:string,
    address:visitor,
    license:string,
    idUser:number

}

export type visitorsType={
    id: number;
    name: string;
    cpf: string;
    license: string | null;
    idResident: number;
    idUser: number;
} 

