const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = isGithubPages ? "/Devansh_Portfolio" : "";

const nextConfig = {
  unoptimized: true,
  trailingSlash: true,
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
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
