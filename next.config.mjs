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
