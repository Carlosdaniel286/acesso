import { User } from './../../user/creatUser';
import { PrismaClient } from "@prisma/client";
import { visitorAddres } from "../../../types/vistors";
import { Inside } from "../handleEnterVistors/insideVisitor";
import { VisitorInfo, AddressInfo } from "../../../types/vistors";
import  {Request, Response} from 'express'
import dotenv from 'dotenv'

dotenv.config()
const urlBase = process.env.BASE_URL_EXPRESS as string
export class Visitor {
  private name = "";
  private cpf = "";
  private address: visitorAddres[] | string = [];
  private license = "";
  private idUser: number;
  private prisma: PrismaClient;
  private addressList: AddressInfo[] = [];
  private image:Express.Multer.File | undefined
  private res: Response;
  private req:Request
  private src:string =''
  constructor(
    req:Request,
    res:Response,
    userId: number,
    prismaClient: PrismaClient
  ) {
    this.res = res
    this.req =req
    this.name =  this.req.body.name;
    this.cpf =  this.req.body.cpf;
    this.address =  this.req.body.address;
    this.license =  this.req.body.cnh;
    this.idUser = userId;
    this.prisma = prismaClient;
    this.image =  this.req.file
    
  }

  async setNewVisitor() {
    try {
      
   
        if(typeof this.image!=='undefined'){
         this.src =`${urlBase}/${this.image.filename}`
        }
      
      if(this.name=='' || this.cpf=='' )  return this.res.status(400).send('cpf ou nome vazios')
      
      if(typeof this.address =='string'){
       this.address= JSON.parse(this.address) as visitorAddres[]
      }
     
      for (let i=0;i<this.address.length;i++) {
        const lt = this.address[i].lt
        const qd = this.address[i].qd 
        console.log("================")
        console.log(this.address[i])
        
        if (lt =='' )return this.res.status(400).send( "Endereço não encontrado.")
        if (qd == "") return this.res.status(400).send("Endereço não encontrado." )

        
        
        const foundAddress = await this.prisma.address.findFirst({
          where: {
            lt: Number(lt),
            qd: Number(qd),
          },
        });

        if (!foundAddress) {
          return this.res.status(400).send("Endereço não encontrado." )
        }

        if (!foundAddress.idResident) {
          return this.res.status(400).send("Sem residente nesse endereço." )
        }
        this.addressList.push(foundAddress);
      }

      if (this.addressList.length === 0) {
        return this.res.status(400).send("Lista de endereços vazia.")
      }
     
      
       const newVisitor = await this.prisma.visitor.create({
        data: {
          name: this.name,
          cpf: this.cpf,
          license: this.license,
          image:this.src,
          user: {
            connect: { id: this.idUser},
            
          },
        },
         include:{
          user:{
           select:{
              name:true,
              },
          }
         }
      });

    
      for (let i = 0; i < this.addressList.length; i++) {
        const item = this.addressList[i];
        if (!item.idResident)  return this.res.status(400).send('sem residente')
        const inside = new Inside(
          newVisitor.id,
          item.idResident,
          item.id,
          this.prisma
        );
         await inside.visitorInside();

        
      }
      console.log(newVisitor)
      return this.res.status(200).send(newVisitor)
    } catch (error) {
      console.error("Erro ao criar visitante:", error);
      return this.res.status(400).send("Falha ao criar o visitante.")
    }
  }
}
