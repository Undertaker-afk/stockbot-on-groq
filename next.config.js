/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '**'
      }
    ]
  },
  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:3000',
        'crispy-guacamole-x59j9jg4jp64h4w9-3000.app.github.dev',
        process.env.CODESPACE_NAME ? `${process.env.CODESPACE_NAME}-3000.app.github.dev` : ''
      ].filter(Boolean)
    }
  }
}

module.exports = nextConfig
