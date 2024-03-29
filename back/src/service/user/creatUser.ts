import prisma from "../../database/prisma";
import bcrypt from "bcrypt";
import { Prisma } from "@prisma/client";
import zxcvbn from "zxcvbn";
import { l } from "../ds";
const cpf = require("gerador-validador-cpf");
import { CPF } from "@julioakira/cpf-cnpj-utils";
import { Request, Response } from "express";
import dotenv from 'dotenv'
dotenv.config()
const urlBase = process.env.BASE_URL_EXPRESS as string
export class User {
  private name: string = "";
  private cpf: string = "";
  private password: string = "";
  public res: Response;
  public req: Request;
  private image:string = ''

  constructor(req: Request, res: Response) {
    const { name, cpf, password } = req.body;
    this.cpf = cpf;
    this.name = name;
    this.password = password;
    this.req = req;
    this.res = res;
  
  }

  async creatUser() {
    try {
      
      if (typeof this.password !== "string" || this.password == "")
        return this.res
          .status(400)
          .send("erro de tipo, senha deve conter caracters");
      if (typeof this.name !== "string" || this.name == "")
        return this.res
          .status(400)
          .send("erro de tipo, nome deve conter caracters ou nome vazio");
      if (typeof this.cpf !== "string" || this.cpf == "")
        return this.res
          .status(400)
          .send("erro de tipo, cpf deve conter caracters ou nome vazio");
         
     
        this.verifiqueCpf(this.cpf);
      //this.verifiquePassword(this.password)
      const hashedPassword = await bcrypt.hash(this.password, 10);
     
      const connect = await prisma;
      if (!connect) return;
      const file = this.req.file;
      if(file) this.image =`${urlBase}/${file?.filename}`
      await connect.user.create({
        data: {
           cpf: this.cpf, 
           name: this.name, 
           password: hashedPassword,
           image:this.image
          
          },
      });

      return this.res.status(200).send("usuario criado com sucesso");
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code == "P2002")
          return this.res.status(400).send("esse cpf ja existe");

        return this.res.status(400).send("falha no serviço");
      }

      if (err instanceof Prisma.PrismaClientValidationError) {
        const message = err.message.toString().split("Argument")[1];
        if (!message) return this.res.status(400).send("erro na validaçao");
        return this.res.status(400).send(message);
      }
      if (err instanceof Error) {
        const error = err as Error;
        return this.res.status(400).send(error.message);
      }

      return this.res.status(400).send("erro inseperado");
    }
  }
  verifiquePassword(password: string) {
    const result = zxcvbn(password);
    const { score } = result;
    const containsLetters = /[a-zA-Z]/.test(password);
    const containsNumbers = /\d/.test(password);
    const containsSpecialCharacters = /[!@#$%*]/.test(password);
    const isValidPassword =
      containsLetters && containsNumbers && containsSpecialCharacters;
    const verifque = isValidPassword && score > 2;

    if (!verifque)
      return this.res.status(400).send("senha esta faltando requistos");
  }
  verifiqueCpf(cpf: string) {
    console.log(cpf);
    const verifiqueCpfs = CPF.Validate(cpf);

    //if(!verifiqueCpfs) return this.res.status(400).send('cpf invalido')
  }
}

export const creatResdents = async () => {
  //const address = await prisma.address.findMany({})
  const connect = await prisma;
  if (!connect) return;
  const string = l.replace(/<li>/g, "").replace(/<\/li>/g, ",");
  const arrys = string.split("").join("").split("\n");
  //const newAddr= await prisma.address.findMany({})
  console.log(arrys);
  for (let i = 0; i < arrys.length; i++) {
    const ls = i;
    const cpfAleatorio = cpf.generate();
    const formatted = CPF.Format(cpfAleatorio);

    const newResident = await connect.resident.create({
      data: {
        id: ls + 1,
        name: arrys[i],
        cpf: formatted,

        address: {
          connect: {
            id: ls + 1, // Utiliza o ID do endereço criado anteriormente
          },
        },
        license: null,
        idUser: 1,
      },
    });
  }
  //console.log(Array(arry))
};

export const creatAddres = async () => {
  //const address = await prisma.address.findMany({})
  const connect = await prisma;
  if (!connect) return;
  try {
    let arry = [];
    for (let qd = 1; qd <= 20; qd++) {
      for (let lt = 1; lt <= 20; lt++) {
        arry.push({
          id: arry.length + 1,
          qd,
          lt,
        });
      }
    }
    console.log(arry);
    for (let i = 0; i <= arry.length; i++) {
      const address = await connect.address.create({
        data: {
          id: arry[i].id,
          qd: arry[i].qd,
          lt: arry[i].lt,
        },
      });
      console.log(address);
    }
  } catch (err) {
    console.log(err);
  }
};
