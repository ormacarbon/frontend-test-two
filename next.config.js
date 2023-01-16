/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    baseUrl: "https://rickandmortyapi.com/api"
  }
}

module.exports = nextConfig
