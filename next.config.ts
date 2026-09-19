import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the workspace root: lockfiles outside the project (e.g. at the
    // drive root) can otherwise mislead Turbopack's root inference.
    root: process.cwd(),
  },
};

export default nextConfig;
