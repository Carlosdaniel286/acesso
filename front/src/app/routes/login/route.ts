import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const urlBase = process.env.NEXT_PUBLIC_URL_BASE as string
import { serialize } from 'cookie';
import { AxiosError } from 'axios';

export async function POST(req:Request , res:Response) {
  try{
  const data = await req.json()
  const response = await axios.post(`${urlBase}/login`, data)
  const cookie = response.headers.token
  const name = response.headers.name
  console.log(cookie)
  const cookieOptions = {
    httpOnly: true,
    maxAge: 60 * 60 * 24, // Exemplo: expira em 1 dia
    path: '/', // O caminho do cookie
    };
  const serializedCookie = serialize('token', cookie, cookieOptions)
  return new Response(name, {
  status: 200,
  headers: { 'Set-Cookie':`${serializedCookie}` },
})
  }catch(err){
    console.log(err)
    if(err instanceof AxiosError){
      return new Response(err.response?.data, {
        status: err.response?.status,
        
      })
    }
  }
}