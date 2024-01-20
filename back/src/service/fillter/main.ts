import { PrismaClient } from "@prisma/client"
import { NameFilter } from "./helpers/fillterName"
import { CpfFilter } from "./helpers/fillterCpf"
import { CodeFilter } from "./helpers/fillterCod"
import { Datafilter } from "../../types/fillter"


export class DataFilter {
   private name:string | ' '
   private code:number| ''
   private cpf:string| ''
   
   private prisma: PrismaClient
    constructor (data:Datafilter,prisma: PrismaClient){
     this.name=data.name
     this.code=data.code
     this.cpf=data.cpf
     this.prisma=prisma
    }
    async HandleDataFilter(){
        try{
       if(this.cpf){
        const cpFilter = new CpfFilter(this.cpf,this.prisma)
        const cpfs = await cpFilter.cpfStartfilter()
        return cpfs
       }
       if(this.name){
        const nameFilter = new NameFilter(this.name,this.prisma)
        const names = await nameFilter.nameStartfilter()
        return names
       }
       if(this.code){
        const codeFilter = new CodeFilter(this.code,this.prisma)
        const code = await codeFilter.Handlecode()
        return code
       }
      
       return ['']
    
    }catch(err){
      console.log(err)
      return ['']
    }

       

    }





}