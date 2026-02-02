/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {},
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  eslint: {
    dirs: ['app'],
  },
  images: {
    domains: [
      'static.wixstatic.com',
      'scontent-qro1-2.xx.fbcdn.net',
      'cronicadelpoder.com',
      'as1.ftcdn.net',
      'as2.ftcdn.net',
      'cdn0.bodas.com.mx',
      'res.cloudinary.com',
      'res-console.cloudinary.com',
      'images.unsplash.com',
      'plus.unsplash.com',
      'videos.pexels.com',
    ],
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
