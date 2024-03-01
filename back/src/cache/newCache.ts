import dotenv from 'dotenv'
dotenv.config()
import { createClient } from 'redis';

const password:string | undefined = process.env.PASSWORD_REDIS 
const url= process.env.HORST_REDIS as string

const client = createClient({
    password,
    url,
   });

export const connect =async()=>{
    try{
        
    return await client.connect();
    }catch(err){
        console.log(err)
    }
}

client.on('error', err => console.log('Redis Client Error', err));
client.on('ready', async() => {
    try{
console.log('Cliente Redis conectado');

console.log('Detalhes da conexão: ' + (await client.CLIENT_INFO()).addr);
    }catch(err){
        console.log(err)
    }
});

  export const setCache = async (key:string, value:string) => {
    try{
      await client.set(key, value);
    
}catch(err){
    console.log('Detalhes da conexão: ' );
    console.log(err)
}
};

// Função para recuperar um valor do cache
export const getCache = async (key:string) => {
    try{
         const value = await client.get(key);
        return value
        
    }catch(err){
        console.log(err)
        return false
    }
};

// Função para verificar se uma chave existe no cache
export const hasCache = async (key:string) => {
    try{
       
            const value = await client.exists(key);
            if(value===1) return true
            return false
        
       
    }catch(err){
        console.log(err)
        return false
    }
};

// Função para remover um valor do cache
export const delCache = async (key:string) => {
    try{
        
            const value = await client.del(key);
            if(value===1) return true
           return false
        
    }catch(err){
        console.log(err)
        return false
    }
};