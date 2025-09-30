const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = isGithubPages ? "/Devansh_Portfolio" : "";

const nextConfig = {
    unoptimized: true,
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos", pathname: "/**" },
      { protocol: "https", hostname: "res.cloudinary.com", pathname: "/**" },
    ],
  },
    output: "export",
  basePath: repoName,
  assetPrefix: repoName,
};

export default nextConfig;
