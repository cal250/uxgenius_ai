/** @type {import('next').NextConfig} */
const nextConfig = {
     reactStrictMode: true,
     swcMinify: true,
     images: {
          domains: ['via.placeholder.com'], // Added placeholder.com for demo images
     },
     // Enable static exports if needed
     // output: 'export',

     // Configure webpack if needed
     webpack: (config, { isServer }) => {
          // Add any webpack customizations here
          return config;
     },
}

module.exports = nextConfig 