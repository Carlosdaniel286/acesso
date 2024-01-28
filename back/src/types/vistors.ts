


export type visitorAddres={
    qd:number,
     lt:number
 }
export type visitors ={
    name:string,
    cpf:string,
    address:visitorAddres[],
    cnh:string,
   

}

export type visitorsType={
    id: number;
    name: string;
    cpf: string;
    license:string |null;
    User: {
        name: string;
    };

} 

export type ArrysAddress={
    id: number;
    qd: number;
    lt: number;
    idResident: number | null
}

