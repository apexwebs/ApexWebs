import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    ADMIN_USERNAME: process.env.ADMIN_USERNAME,
    ADMIN_PASSWORD_HASH: process.env.ADMIN_PASSWORD_HASH,
    JWT_SECRET: process.env.JWT_SECRET
  }
};

export default nextConfig;
