/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "dist",
  images: {
    remotePatterns: [
      {
        hostname: "tailwindui.com",
      },
      {
        hostname: "cms.alohakush.ca",
      },
    ],
  },
};

module.exports = nextConfig;
