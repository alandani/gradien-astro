# Gradien Digital Indonesia — Website

Official website for **CV. Gradien Digital Indonesia**, built with [Astro](https://astro.build) and MDX.

## Tech Stack

- **Framework**: Astro 4.x
- **Blog**: MDX (content collections)
- **Styling**: Vanilla CSS (no framework)
- **Deployment**: Vercel / Netlify (static output)

## Project Structure

```
gradien-astro/
├── src/
│   ├── components/       # Nav, Footer, SEO, BlogCard, BlogImage
│   ├── content/blog/     # MDX blog posts
│   ├── layouts/          # BaseLayout, BlogLayout
│   └── pages/            # index.astro, blog/[slug].astro, 404, sitemap, rss
├── public/               # robots.txt, favicon.svg
├── astro.config.mjs
└── package.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev        # http://localhost:4321

# Build for production
npm run build

# Preview production build
npm run preview
```

## Key Pages

| Page | Path |
|------|------|
| Homepage | `/` |
| Blog listing | `/blog` |
| Blog post | `/blog/[slug]` |
| Sitemap | `/sitemap.xml` |
| RSS feed | `/rss.xml` |

## Adding Blog Posts

Drop a new `.mdx` file into `src/content/blog/`. It will automatically appear in the blog listing, sitemap, and RSS feed.

Required frontmatter:

```yaml
---
title: "Your Post Title"
description: "Short description for SEO"
pubDate: 2025-01-01
tags: ["tag1", "tag2"]
readingTime: "5 min read"
heroImage: "https://..."
heroImageAlt: "Image description"
---
```

## Contact

- Website: [business.gradien.co](https://business.gradien.co)
- Email: business@gradien.co
- Phone: +62 851 5701 2200
