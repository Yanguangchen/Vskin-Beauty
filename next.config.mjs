import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true, // Enable React Strict Mode
  pwa: {
    dest: 'public', // Directory for the service worker
    disable: process.env.NODE_ENV === 'development', // Disable PWA during development
  },
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
});

export default nextConfig;
