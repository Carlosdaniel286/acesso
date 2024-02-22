import { PrismaClient, Prisma } from "@prisma/client";
import { getVisitors } from "../getvistors/getVisitor";
import { endOfDay, format, startOfDay } from "date-fns";
import { typeOfgetVistors } from "../../../types/vistors";
import { formatDates } from "../getvistors/getVisitor";

export class handleVistorsEnter {
  private prisma: PrismaClient;
  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async getVistorsInside() {
    try {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const years = currentDate.getFullYear();
      //const hours = currentDate.getHours();
      const allUsers = await this.prisma.visitor.findMany({
        where: {
          inside: {
            some: {
              day,
              month,
              years: {
                equals: years,
              },
            },
          },
        },
        select: {
          name: true,
          cpf: true,
          id: true,
          license: true,

          User: {
            select: {
              name: true,
            },
          },
        },
      });

      return allUsers;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
