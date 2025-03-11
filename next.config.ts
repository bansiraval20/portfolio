/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
  appDir: true,
  trailingSlash: true,
  
  },

  images: {
    domains: ["rutvikdarji.vercel.app"], 
  },
};

module.exports = nextConfig;
