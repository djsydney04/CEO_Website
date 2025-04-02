/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  transpilePackages: ['three'],
  webpack: (config) => {
    config.resolve.alias.three = require.resolve('three')
    return config
  }
}

module.exports = nextConfig 