/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['storage.googleapis.com'],
  },
  async redirects() {
    return [{ source: '/', destination: '/nekadex/1', permanent: true }];
  },
};

module.exports = nextConfig;
