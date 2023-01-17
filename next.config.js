/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const prefix = isProd ? "/frontend-test-two" : "";
const nextConfig = {
  basePath: prefix,
  assetPrefix: prefix,
  reactStrictMode: true,
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
