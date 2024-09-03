/** @type {import('next').NextConfig} */
const nextConfig = {
  iamges: {
    remotePatterns: [
      {
        hostname: 'github.com',
      },
    ],
  },
}

export default nextConfig
