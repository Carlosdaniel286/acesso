import { PrismaClient } from "@prisma/client";
import { visitorAddres } from "../../../types/vistors";
import { Inside } from "../handleEnterVistors/insideVisitor";
import { VisitorInfo, AddressInfo } from "../../../types/vistors";
import dotenv from 'dotenv'
dotenv.config()
const urlBase = process.env.BASE_URL_EXPRESS as string
export class Visitor {
  private name = "";
  private cpf = "";
  private addresses: visitorAddres[] = [];
  private license = "";
  private idUser: number;
  private prisma: PrismaClient;
  private addressList: AddressInfo[] = [];
  private image:Express.Multer.File | string = '' 
  constructor(
    visitorInfo: VisitorInfo,
    userId: number,
    prismaClient: PrismaClient
  ) {
    this.name = visitorInfo.name;
    this.cpf = visitorInfo.cpf;
    this.addresses = visitorInfo.address;
    this.license = visitorInfo.cnh;
    this.idUser = userId;
    this.prisma = prismaClient;
    this.image = visitorInfo.image
  }

  async setNewVisitor() {
    try {
      
   
      if(typeof this.image!=='string') {
        this.image =`${urlBase}/${this.image.filename}`
      }
      if(this.name=='' || this.cpf=='' )  return { success: false, message: "Nome ou cpf vazios." };
      
     for (const address of this.addresses) {
        if (address.lt === "")
          return { success: false, message: "Endereço não encontrado." };
        if (address.qd === "")
          return { success: false, message: "Endereço não encontrado." };

        const foundAddress = await this.prisma.address.findFirst({
          where: {
            lt: address.lt,
            qd: address.qd,
          },
        });

        if (!foundAddress) {
          return { success: false, message: "Endereço não encontrado." };
        }

        if (!foundAddress.idResident) {
          return { success: false, message: "Sem residente nesse endereço." };
        }
        this.addressList.push(foundAddress);
      }

      if (this.addressList.length === 0) {
        return { success: false, message: "Lista de endereços vazia." };
      }
     
      
       const newVisitor = await this.prisma.visitor.create({
        data: {
          name: this.name,
          cpf: this.cpf,
          license: this.license,
          image:this.image,
          user: {
            connect: { id: this.idUser },
          },
        },
      });

    
      for (let i = 0; i < this.addressList.length; i++) {
        const item = this.addressList[i];
        if (!item.idResident) return { success: false };
        const inside = new Inside(
          newVisitor.id,
          item.idResident,
          item.id,
          this.prisma
        );
         await inside.visitorInside();

        
      }
      return { success: true , message: newVisitor };
    } catch (error) {
      console.error("Erro ao criar visitante:", error);
      return { success: false, message: "Falha ao criar o visitante." };
    }
  }
}
