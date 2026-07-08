import path from 'path';

import { Header } from '@components/Blog/Post/Header';

import { Paragraph } from '@components/Typography';

import { fetchPost, fetchPosts, type Post, POSTS_DIR } from '@lib/blog';

import { fetchMd } from '@lib/mdx';

export async function generateStaticParams() {
  const posts: Post[] = fetchPosts();

  return posts.map((post: Post) => ({ slug: post.path }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const filename = slug + '.mdx';

  const post: Post = fetchPost(filename);

  const filePath = path.join(POSTS_DIR, filename);
  
  const { content } = await fetchMd(filePath);

  return (
    <div>
      <Header background={post.background} lastModifiedDate={post.lastModifiedDate} title={post.title} />
      <Paragraph>{post.abstract}</Paragraph>
      <article>
        {content}
      </article>
    </div>
  );
}
