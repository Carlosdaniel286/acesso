import { visitorAddres } from "../../../types/vistors";
import { PrismaClient } from "@prisma/client";
import { Inside } from "../handleEnterVistors/insideVisitor";
import { checkInSide } from "./helper/checkInSide/checkInSIde";
import { delCache, setCache} from "../../../cache/newCache";
export class newEntry {
  private visitorId: number;
  private addressResident: visitorAddres[];
  private prisma: PrismaClient;

  constructor(
    visitorId: number,
    addressResident: visitorAddres[],
    prisma: PrismaClient
  ) {
    (this.addressResident = addressResident), (this.visitorId = visitorId);
    this.prisma = prisma;
  }

  async NewEntry() {
    try {
      const permisson = await checkInSide(this.visitorId, this.prisma);

      if (!permisson)
        return { success: false, message: "vistante já esta no condominio" };

      for (const item of this.addressResident) {
        if (item.lt == "")
          return { success: false, message: "Endereço não encontrado." };
        if (item.qd == "")
          return { success: false, message: "Endereço não encontrado." };

        const address = await this.prisma.address.findFirst({
          where: {
            qd: item.qd,
            lt: item.lt,
          },
        });

        if (!address)
          return { success: false, message: "Endereço não encontrado." };
        if (!address.idResident)
          return { success: false, message: "Endereço não encontrado." };

        const inside = new Inside(
          this.visitorId,
          address.idResident,
          address.id,
          this.prisma
        );
        await inside.visitorInside();
      }
      //delCache('1')
      

      return { success: true, message: "Exit" };
    } catch (err) {
      console.log(err);
      return { success: false, message: "Endereço não encontrado." };
    }
  }
}
