/** @type {import('next').NextConfig} */

const nextConfig = {
  compress: true,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false
};

export default nextConfig;
