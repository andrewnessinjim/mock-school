import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "**",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
