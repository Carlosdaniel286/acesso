/** @type {import('next').NextConfig} */
const nextConfig = {
          experimental: {
            serverActions: true,
          },
          images: {
            domains: ['localhost', 'www.easyresgistercondominios.website'], // Adicione o domínio correto aqui
          },
    }
     
 module.exports = nextConfig
