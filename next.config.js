/** @type {import('next').NextConfig} */

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
        unoptimized: true
    }
}

module.exports = nextConfig
