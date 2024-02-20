import fs from 'fs';
import { Feed } from 'feed';

import { getPosts } from './posts';

export const generateFeeds = async () => {
  const domain = process.env.NEXT_PUBLIC_MAIN_DOMAIN || process.env.VERCEL_URL;
  const posts = await getPosts();

  const siteURL = `https://${domain}`;
  const date = new Date();
  const author = {
    name: 'Seagin',
    email: 'cijin@seagin.me',
    link: 'https://seagin.me',
  };

  const feed = new Feed({
    title: 'Cijin (SeaGin) Cherian | Software Developer',
    description: 'A space where I talk about all the things I am currently building',
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/seagin.svg`,
    copyright: `All rights reserved ${date.getFullYear()}, Seagin.`,
    updated: date,
    generator: 'Next.js',
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`,
      json: `${siteURL}/rss/feed.json`,
      atom: `${siteURL}/rss/atom.xml`,
    },
    author,
  });

  for (const post of posts) {
    const url = `${siteURL}/${post.slug}`;
    console.log(post)

    feed.addItem(
      {
        title: post.title,
        guid: post.slug,
        id: url,
        link: url,
        description: post.excerpt,
        content: post.summary,
        author: [author],
        contributor: [author],
        date: new Date(post.published_date),
      }
    );

  }

  fs.mkdirSync('../public/rss', { recursive: true });
  fs.writeFileSync('../public/rss/feed.xml', feed.rss2());
  fs.writeFileSync('../public/rss/atom.xml', feed.atom1());
  fs.writeFileSync('../public/rss/feed.json', feed.json1());
}
