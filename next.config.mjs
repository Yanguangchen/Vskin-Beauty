const withPWA = require('next-pwa')({
  dest: 'public', // Service worker output
  disable: process.env.NODE_ENV === 'development', // Disable in development
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // React strict mode enabled
  async headers() {
    return [
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },
};

module.exports = withPWA(nextConfig);
