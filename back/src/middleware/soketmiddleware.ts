import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { meuCache } from "../service/user/login";
dotenv.config();
import { Token, Id } from "../types/middleware";
import { Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

interface CustomSocket
  extends Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap> {
  userId?: string;
  name?: string;
}

export async function socketAuthMiddleware(
  socket: CustomSocket,
  next: (err?: Error) => void
) {
  try {
    const cookies = socket.handshake.headers.cookie;

    if (!cookies) {
      return next(new Error("Sem cookies"));
    }

    const auth = cookies.includes("token=");
    if (!auth) {
      return next(new Error("Sem token ou token corrompido"));
    }

    const token = cookies.split("=")[1];

    const secretKey = process.env.SECRET_KEY as string;
    const verique = jwt.verify(token, secretKey) as Token;
    const valor = (await meuCache.get(token)) as Id;

    // if (!valor) {
    //   return next(new Error('O servidor caiu'));
    // }

    // if (valor.id !== verique.userId) {
    //   return next(new Error('Usuário inválido'));
    // }

    // Adicionando informações ao socket para uso posterior
    console.log(verique.userId);
    socket.handshake.query.userId = verique.userId.toString();
    socket.handshake.query.name = verique.name;

    next();
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      console.log(err.message);
      return next(new Error("Token inválido"));
    }
  }
}
