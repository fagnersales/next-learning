const dev = process.env.NODE_EN !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://yourwebsite.com'