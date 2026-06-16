/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp']
  },
  allowedDevOrigins: ['192.168.31.247'],
  /* config options here */
  reactCompiler: true
}

export default nextConfig
