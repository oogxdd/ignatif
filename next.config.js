/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/soundfuck',
        destination: '/projects/soundfuck',
      },
    ]
  },
}

module.exports = nextConfig
