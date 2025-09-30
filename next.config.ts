const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = isGithubPages ? "/Devansh_Portfolio" : "";

const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos", pathname: "/**" },
      { protocol: "https", hostname: "res.cloudinary.com", pathname: "/**" },
    ],
  },
  basePath: repoName,
  assetPrefix: repoName,
};

export default nextConfig;
