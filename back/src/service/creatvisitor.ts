import { PrismaClient } from "@prisma/client"
import { visitorAddres} from "../types/vistors" 
import { Inside } from "./insideVisitor"
import { VisitorInfo, AddressInfo } from "../types/vistors";


export class Visitor {
  private name = '';
  private cpf = '';
  private addresses: visitorAddres[] = [];
  private license = '';
  private idUser: number;
  private prisma: PrismaClient;
  private addressList: AddressInfo[] = [];

  constructor(visitorInfo:VisitorInfo, userId: number, prismaClient: PrismaClient) {
    this.name = visitorInfo.name;
    this.cpf = visitorInfo.cpf;
    this.addresses = visitorInfo.address;
    this.license = visitorInfo.cnh;
    this.idUser = userId;
    this.prisma = prismaClient;
  }

  async setNewVisitor() {
    try {
      console.log(this.addresses);
      for (const address of this.addresses) {
        if (address.lt === '') return { success: false, message: 'Endereço não encontrado.' };
        if (address.qd === '') return { success: false, message: 'Endereço não encontrado.' };

        const foundAddress = await this.prisma.address.findFirst({
          where: {
            lt: address.lt,
            qd: address.qd,
          },
        });

        if (!foundAddress) {
          return { success: false, message: 'Endereço não encontrado.' };
        }

        if (!foundAddress.idResident) {
          return { success: false, message: 'Sem residente nesse endereço.' };
        }

        this.addressList.push(foundAddress);
      }

      if (this.addressList.length === 0) {
        return { success: false, message: 'Lista de endereços vazia.' };
      }

      const newVisitor = await this.prisma.visitor.create({
        data: {
          name: this.name,
          cpf: this.cpf,
          license: this.license,
          User: {
            connect: { id: this.idUser },
          },
        },
      });

      console.log(this.addressList);
      for (let i = 0; i < this.addressList.length; i++) {
        const item = this.addressList[i];
        if (!item.idResident) return { success: false };
        const inside = new Inside(newVisitor.id, item.idResident, item.id, this.prisma);
        await inside.visitorInside();

        if (i === this.addressList.length - 1) {
          return { success: true };
        }
      }
    } catch (error) {
      console.error('Erro ao criar visitante:', error);
      return { success: false, message: 'Falha ao criar o visitante.' };
    }
  }
}
