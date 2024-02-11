/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false, //DEPLOY : sätt till false eftersom vi inte använder next/serverless grejer, appen är statisk
  },
};

module.exports = nextConfig;
