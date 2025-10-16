const repoName = "";

const nextConfig = {
  unoptimized: true,
  trailingSlash: true,
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
   experimental: {
    legacyBrowsers: false, // 🔥 Drop IE11 & legacy polyfills
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos", pathname: "/**" },
      { protocol: "https", hostname: "res.cloudinary.com", pathname: "/**" },
    ],
  },
  output: "export",
  env: {
    NEXT_PUBLIC_BASE_PATH: repoName,
  },
  basePath: repoName,
  assetPrefix: repoName,
};

module.exports = nextConfig;
export default nextConfig;
