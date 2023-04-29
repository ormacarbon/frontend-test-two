const { config } = require('dotenv')
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: config().parsed.API_URL,
  },
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx', 'page.jsx'],
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig
