/** @type {import('next').NextConfig} */
const nextConfig = {
          experimental: {
            serverActions: true,
          },
          images: {
            domains: ['localhost'], // Adicione 'localhost' ou o domínio correto aqui
          },
    }
     
 module.exports = nextConfig
