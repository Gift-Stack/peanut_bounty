/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "*",
        protocol: "http",
      },
      {
        hostname: "*",
        protocol: "https",
      },
    ],
  },
  reactStrictMode: false,
  env: {
    WC_PROJECT_ID: process.env.WC_PROJECT_ID,
    PEANUT_API_KEY: process.env.PEANUT_API_KEY,
  },
};

export default nextConfig;
