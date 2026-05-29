import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  return rss({
    title: 'Gradien Digital Indonesia Blog',
    description: 'Insights on software development, AI integration, GIS, ERP Odoo, and the Indonesian tech industry.',
    site: context.site!,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map(post => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/blog/${post.slug}`,
        categories: post.data.tags,
        author: post.data.author,
      })),
    customData: `<language>en-us</language>`,
  });
}
