import prisma from "../../../database/prisma";
import { visitorsType } from "../../../types/vistors";
import { getVistorInside } from "./helpers/getVitorInSide/getVistorInSide";
import { getVisitorsOutside } from "./helpers/getVistorOutside/getOutside";
import { setCache } from "../../../cache/newCache";
export const getVisitor = async () => {
  try {
    const connect = await prisma;
    if (!connect) return null;

    const visitorsInInside = await getVistorInside(connect);
    const visitorsInOutside = await getVisitorsOutside(connect);

    const arr: visitorsType[] = [];

    for (const inside of visitorsInInside) {
      const correspondingOutside = visitorsInOutside.find(outside => outside.id === inside.id);
      
      if (correspondingOutside && correspondingOutside.outside[0].createdAt > inside.inside[0].createdAt) {
        Object.assign(correspondingOutside, { controll: 'Enter' });
        setCache(correspondingOutside.id.toString(),'Enter')
        arr.push(correspondingOutside);
      } else {
        Object.assign(inside, { controll: 'Exit' });
        setCache(inside.id.toString(),'Exit')
        arr.push(inside);
      }
    }

    arr.sort((a, b) => a.id - b.id);

    return arr;
  } catch (err) {
    console.log(err);
    return [];
  }
};