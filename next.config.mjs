/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000", // Include the port if necessary
        pathname: "/**", // Match all paths
      },
    ],
  },
};

export default nextConfig;
