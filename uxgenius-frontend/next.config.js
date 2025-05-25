/** @type {import('next').NextConfig} */
const nextConfig = {
     reactStrictMode: true,
     swcMinify: true,
     images: {
          remotePatterns: [
               {
                    protocol: 'https',
                    hostname: 'via.placeholder.com',
                    port: '',
                    pathname: '/**',
               },
               {
                    protocol: 'https',
                    hostname: 'images.unsplash.com',
                    port: '',
                    pathname: '/**',
               },
               {
                    protocol: 'https',
                    hostname: 'source.unsplash.com',
                    port: '',
                    pathname: '/**',
               }
          ],
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