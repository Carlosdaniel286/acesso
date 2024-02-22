import { Data } from "node-cache";
import prisma from "../../../database/prisma";
import { typeOfgetVistors } from "../../../types/vistors";
import { format } from "date-fns";

// Objeto para rastrear as últimas datas de entrada e saída
const dateCompare = {
  inside: "",
  outside: "",
};

// Função para formatar as datas de entrada e saída de cada usuário
export const formatDates = (allUsers: typeOfgetVistors[]) => {
  return allUsers.map((user) => {
    const formattedInside = user.inside.map((item) => ({
      ...item,
      createdAt: format(new Date(item.createdAt), "dd/MM/yyyy HH:mm"),
    }));

    const formattedOutside = user.outside.map((item) => ({
      ...item,
      createdAt: format(new Date(item.createdAt), "dd/MM/yyyy HH:mm"),
    }));

    // Atualiza as últimas datas de entrada e saída
    dateCompare.inside =
      formattedInside.length > 0
        ? formattedInside[formattedInside.length - 1].createdAt
        : "";
    dateCompare.outside =
      formattedOutside.length > 0
        ? formattedOutside[formattedOutside.length - 1].createdAt
        : "";

    return {
      ...user,
      inside: formattedInside,
      outside: formattedOutside,
    };
  });
};

// Função para obter todos os visitantes formatados
export const getVisitors = async () => {
  try {
    const connect = await prisma;

    if (!connect) return null;

    const allUsers = await connect.visitor.findMany({
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
    if (allUsers.length == 0) return null;
    // Formata os visitantes e retorna
    //const allUsersFormatted = formatDates(allUsers);
    return allUsers;
  } catch (err) {
    return null;
  }
};
