// prisma.ts
import { PrismaClient} from '@prisma/client';


//export default main()

//const { PrismaClient } = require('@prisma/client');
 const prisma = new PrismaClient();
 
 
 
 
 async function main() {
    const prisma =  new PrismaClient();
    
    try {
      await prisma.$connect();
      console.log('Conexão bem-sucedida!');
  
     return  prisma
    } catch (error) {
      console.error('Erro ao conectar ao Prisma:', error);
    } finally {
      await prisma.$disconnect();
      console.log('Desconectado do Prisma.');
    }
  }

  export default main()
