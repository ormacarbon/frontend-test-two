/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const prefix = isProd ? "/frontend-test-two" : "/public";

const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: prefix,
  },
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
    };
  },
};

module.exports = nextConfig;
