import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/chat", destination: "/ask-folsom", permanent: true },
      { source: "/restaurants", destination: "/eat-drink", permanent: true },
      { source: "/parks", destination: "/parks-trails", permanent: true },
      { source: "/map", destination: "/", permanent: false },
      { source: "/search", destination: "/ask-folsom", permanent: false },
    ];
  },
};

export default nextConfig;
