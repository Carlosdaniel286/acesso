import { PrismaClient } from "@prisma/client";
import { Outside } from "../../newOut";
import { checkOutSide } from "../checkOutSide/checkOutSide";
import { setCache } from "../../../../../cache/newCache";

export class newExitVistor {
  private visitorId: number;
  private prisma: PrismaClient;

  constructor(visitorId: number, prisma: PrismaClient) {
    (this.visitorId = visitorId), (this.prisma = prisma);
  }

  async NewExit() {
    try {
      const permisson = await checkOutSide(this.visitorId, this.prisma);

      if (!permisson) return { success: false, message: "vistante já saiu" };

      const address = await this.prisma.inside.findMany({
        where: {
          visitorId: this.visitorId,
        },
        select: {
          address: {
            select: {
              lt: true,
              qd: true,
              idResident: true,
              id: true,
            },
          },
        },
      });

      if (!address)
        return { success: false, message: "Endereço não encontrado." };
      if (!address)
        return { success: false, message: "Endereço não encontrado." };

      for (const i in address) {
        const idResident = address[i].address.idResident;
        if (!idResident) return { success: false, message: "saida" };

        const ouside = new Outside(
          this.visitorId,
          idResident,
          address[i].address.id,
          this.prisma
        );
        await ouside.visitorOutside();
      }
      setCache(this.visitorId.toString(), "Enter");
      return { success: true, message: "Enter" };
    } catch (err) {
      console.log(err);
      return { success: false, message: "Endereço não encontrado." };
    }
  }
}
