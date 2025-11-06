/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [100], // Allow quality=100 to kill the warning
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all for flexibility, tighten later if needed
      },
    ],
  },
};

module.exports = nextConfig;