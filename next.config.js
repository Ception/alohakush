/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
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
