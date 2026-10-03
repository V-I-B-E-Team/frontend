import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["tourde.app", "*.tourde.app"],
  reactCompiler: true,
};

export default nextConfig;
