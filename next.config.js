
/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    logger: {
      level: 'debug'
    }
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
