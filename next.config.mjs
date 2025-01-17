import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enable React Strict Mode if desired
};

// Apply the PWA plugin configuration
const pwaConfig = withPWA({
  dest: 'public', // Directory for the service worker
  disable: process.env.NODE_ENV === 'development', // Disable PWA during development
});

// Merge and export the final configuration
export default {
  ...nextConfig,
  ...pwaConfig,
};

module.exports = {
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

