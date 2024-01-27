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

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Exclude /cms folder from the build
    config.module.rules.push({
      test: /\.tsx?$/,
      exclude: /cms/,
    });

    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;
