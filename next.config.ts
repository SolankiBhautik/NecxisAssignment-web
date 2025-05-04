/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // Firebase environment variables are already handled by .env.local
  },
  // Ensure we can use Firebase in Service Worker
  headers: async () => {
    return [
      {
        source: '/firebase-messaging-sw.js',
        headers: [
          {
            key: 'Service-Worker-Allowed',
            value: '/'
          }
        ]
      }
    ];
  },
  webpack: (config:any) => {
    // Add PWA support
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };

    return config;
  }
};

export default nextConfig;
