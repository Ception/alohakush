/** @type {import('next').NextConfig} */
const nextConfig = {
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
