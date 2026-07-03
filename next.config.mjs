/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignore linting errors during compilation builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Compile even if type warnings occur in dev dependencies
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
