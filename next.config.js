/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    API_KEY: process.env.API_KEY
  },
  compiler:{
    styledComponents: true
  }
}

module.exports = nextConfig
