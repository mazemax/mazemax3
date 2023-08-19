/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
    outDir: 'out',
    imageDir: 'images', 
    filenameGenerator: ({ path, name, width, quality, extension }) =>
        `${path.replace(/^\//, '').replace(/\//g, '-')}/${name}.${extension}`,
    convertFormat: [
        ['png', 'webp'],
        ['jpg', 'avif'],
    ]
}
  
module.exports = config
  