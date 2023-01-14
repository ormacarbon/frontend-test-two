/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler:{
    styledComponents: true
  },
  images: {
    domains: ['assets.coingecko.com'],
  },
}

module.exports = nextConfig
