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
     // Disable file system caching
     onDemandEntries: {
          // period (in ms) where the server will keep pages in the buffer
          maxInactiveAge: 25 * 1000,
          // number of pages that should be kept simultaneously without being disposed
          pagesBufferLength: 2,
     },
     // Enable static exports if needed
     // output: 'export',

     // Optimize chunk loading
     experimental: {
          optimizeCss: true,
          optimizePackageImports: ['react-icons'],
     },

     // Configure webpack
     webpack: (config, { isServer }) => {
          // Optimize chunk loading
          config.optimization = {
               ...config.optimization,
               splitChunks: {
                    chunks: 'all',
                    minSize: 20000,
                    maxSize: 244000,
                    minChunks: 1,
                    maxAsyncRequests: 30,
                    maxInitialRequests: 30,
                    cacheGroups: {
                         defaultVendors: {
                              test: /[\\/]node_modules[\\/]/,
                              priority: -10,
                              reuseExistingChunk: true,
                         },
                         default: {
                              minChunks: 2,
                              priority: -20,
                              reuseExistingChunk: true,
                         },
                    },
               },
          };

          // Add any webpack customizations here
          config.watchOptions = {
               poll: 1000, // Check for changes every second
               aggregateTimeout: 300, // Delay before rebuilding
          };
          return config;
     },
}

module.exports = nextConfig 