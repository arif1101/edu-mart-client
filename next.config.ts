// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
// };

// export default nextConfig;


// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       { protocol: "https", hostname: "i.ibb.co.com" },
//       { protocol: "https", hostname: "example.com" },
//     ],
//   },
// };

// export default nextConfig;


// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      // Add any other image hosting domains you use
      {
        protocol: 'https',
        hostname: '**', // Allow all HTTPS domains (use cautiously)
      },
    ],
  },
};

module.exports = nextConfig;