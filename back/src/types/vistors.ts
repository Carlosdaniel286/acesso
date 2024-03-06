export type visitorAddres={
    qd:number | "",
     lt:number | ""
 }
export type VisitorInfo ={
    name:string,
    cpf:string,
    address:visitorAddres[],
    cnh:string,
    image:Express.Multer.File | ''

}

export type visitorsType={
    id: number;
    name: string;
    cpf: string;
    license:string |null;
    User?: {
        name: string;
    };

} 

export type AddressInfo={
    id: number;
    qd: number;
    lt: number;
    idResident: number | null
}
 

 
