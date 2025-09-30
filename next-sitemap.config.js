/** @type {import('next-sitemap').IConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/Devansh_Portfolio" : "";

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://devenvoy.github.io',
  generateRobotsTxt: true,
  // Important: Add basePath for GitHub Pages
  ...(basePath && { 
    siteUrl: `https://devenvoy.github.io${basePath}`,
    transform: async (config, path) => {
      return {
        loc: path,
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      }
    },
  }),
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      `https://devenvoy.github.io${basePath}/sitemap.xml`,
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*', '/admin/*', '/_next/*', '/out/*'],
  generateIndexSitemap: false,
  outDir: './out', // Important for static export
}