/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {unoptimized: true},
  // output: "export",
  trailingSlash: true,
  // distDir: 'build',
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  // typescript: {
  //   // !! WARN !!
  //   // Temporarily ignoring type errors, but should fix the actual issues later
  //   ignoreBuildErrors: true,
  // },
};

export default nextConfig;
