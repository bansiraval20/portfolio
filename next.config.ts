/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
  appDir: true,
  trailingSlash: true,

  
  
  },

  images: {
    domains: ['images.unsplash.com','rutvikdarji.vercel.app'],
  },
};

module.exports = nextConfig;
