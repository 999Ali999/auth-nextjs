import type { NextConfig } from "next";

// https://lh3.googleusercontent.com/a/ACg8ocJm1y2-7TGiZRTPhnQ8BzCiZS7s0zkEWjDbHJyYmHh64vMovLO5vQ=s96-c
// "https://img.icons8.com/?size=100&id=98957&format=png&color=000000"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
