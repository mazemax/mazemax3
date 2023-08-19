/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
    basePath: '/mazemax3',
    outDir: 'out',
    convertFormat: [
        ['png', 'webp'],
        ['jpg', 'avif'],
    ]
}
  
module.exports = config
  