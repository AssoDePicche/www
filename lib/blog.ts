import fs from 'fs';

import matter from 'gray-matter';

export interface Post {
  abstract: string;
  content: string;
  isPublished: boolean;
  title: string;
  lastModifiedDate: Date;
}

const fetchPost = (slug: string): Post => {
  const filepath = process.cwd() + '/blog/' + slug;

  const fileContents = fs.readFileSync(filepath, 'utf-8');

  const metadata = fs.statSync(filepath);

  const { data, content } = matter(fileContents);

  return {
    ...data,
    content: content,
    lastModifiedDate: new Date(metadata.mtime),
  } as Post;
};

export const fetchPosts = () => {
  const slugs = fs.readdirSync(process.cwd() + '/blog');

  const mapSlugsIntoPosts = (slug: string): Post => fetchPost(slug);

  const sortPostsByLastModifiedDate = (aPost: Post, anotherPost: Post): number => aPost.lastModifiedDate > anotherPost.lastModifiedDate ? -1 : 1;

  return slugs.map(mapSlugsIntoPosts).sort(sortPostsByLastModifiedDate);
};
