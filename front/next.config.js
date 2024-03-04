/** @type {import('next').NextConfig} */
const nextConfig = {
          experimental: {
            serverActions: true,
          },
          images: {
            domains: ['imagem-bucker.s3.sa-east-1.amazonaws.com'],
          },
    }
     
 module.exports = nextConfig
