import fs from 'fs';

import matter from 'gray-matter';

import path from 'path';

import { type Post } from '@types/post';

export { type Post };

export const POSTS_DIR = path.join(process.cwd(), 'blog');

export const fetchPost = (slug: string): Post => {
  const filepath = path.join(POSTS_DIR, slug);

  const fileContents = fs.readFileSync(filepath, 'utf-8');

  const metadata = fs.statSync(filepath);

  const { data, content } = matter(fileContents);

  return {
    ...data,
    content: content,
    lastModifiedDate: new Date(metadata.mtime),
    path: slug.split('.mdx')[0],
  } as Post;
};

export const fetchPostsSlugs = (): string[] => !fs.existsSync(POSTS_DIR) ? [] : fs.readdirSync(POSTS_DIR);

export const fetchPosts = () => {
  const slugs: string[] = fetchPostsSlugs();

  const mapSlugsIntoPosts = (slug: string): Post => fetchPost(slug);

  const sortPostsByLastModifiedDate = (aPost: Post, anotherPost: Post): number => aPost.lastModifiedDate > anotherPost.lastModifiedDate ? -1 : 1;

  return slugs.map(mapSlugsIntoPosts).sort(sortPostsByLastModifiedDate);
};
