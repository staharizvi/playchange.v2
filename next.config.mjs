/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Ensure all dynamic routes can be served
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

export default nextConfig
