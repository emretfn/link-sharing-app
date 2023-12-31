/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    domains: ["images.unsplash.com", "qjnkhylwlrikyvssmfdk.supabase.co"],
    minimumCacheTTL: 60,
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
