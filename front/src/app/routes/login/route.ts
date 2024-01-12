import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const urlBase = process.env.NEXT_PUBLIC_URL_BASE
import { serialize } from 'cookie';
export async function POST(req:Request , res:Response) {
  const data = await req.json()

  const response = await axios.post('http://localhost:3001/login', data)
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
}