/** @type {import('next').NextConfig} */
const withExportImages = require('next-export-optimize-images')

const nextConfig = {
    basePath: '/mazemax3',
    output: 'export',
    compress: true,
    poweredByHeader: false,
    devIndicators: {
        buildActivityPosition: 'bottom-right'
    },
    env: {
        customKey: 'my-value'
    },
    serverRuntimeConfig: {
        // Will only be available on the server side
        mySecret: 'secret'
    },
    publicRuntimeConfig: {
        // Will be available on both server and client
        publicFolder: '/public'
    },
    images: {
        minimumCacheTTL: 60,
        formats: ['image/avif', 'image/webp']
    }
}

module.exports = withExportImages(nextConfig)
