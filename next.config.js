/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "docs",
  eslint: {
    ignoreDuringBuilds: true,
  },

  assetPrefix: "",
  images: { unoptimized: true },
  basePath: "/Planet-Net-Zero",
};

module.exports = nextConfig;
