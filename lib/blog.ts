import fs from 'fs';

import matter from 'gray-matter';

import path from 'path';

export interface Post {
  abstract: string;
  content: string;
  isPublished: boolean;
  lastModifiedDate: Date;
  path: string;
  title: string;
}

const DIR = path.join(process.cwd(), 'blog');

export const fetchPost = (slug: string): Post => {
  const filepath = path.join(DIR, slug);

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

export const fetchPostsSlugs = (): string[] => !fs.existsSync(DIR) ? [] : fs.readdirSync(DIR);

export const fetchPosts = () => {
  const slugs: string[] = fetchPostsSlugs();

  const mapSlugsIntoPosts = (slug: string): Post => fetchPost(slug);

  const sortPostsByLastModifiedDate = (aPost: Post, anotherPost: Post): number => aPost.lastModifiedDate > anotherPost.lastModifiedDate ? -1 : 1;

  return slugs.map(mapSlugsIntoPosts).sort(sortPostsByLastModifiedDate);
};
