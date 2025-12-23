// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.ibb.co.com" },
      { protocol: "https", hostname: "example.com" },
    ],
  },
};

export default nextConfig;


