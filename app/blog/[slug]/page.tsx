import path from 'path';

import { MdxContent } from '@components/Blog/MdxContent';

import { Header } from '@components/Blog/Post/Header';

import { Paragraph } from '@components/Typography';

import { fetchPost, fetchPosts, type Post, POSTS_DIR } from '@lib/blog';

import { fetchMd } from '@lib/mdx';

export async function generateStaticParams() {
  const posts: Post[] = fetchPosts();

  return posts.map((post: Post) => ({ slug: post.path }));
}

export async function getStaticPaths() {
  const posts: Post[] = fetchPosts();

  const paths = posts.map((post: Post) => ({ slug: post.path }));

  return {
    fallback: false,
    paths,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const filename = slug + '.mdx';

  const post: Post = fetchPost(filename);

  const filePath = path.join(POSTS_DIR, filename);

  const markdown = await fetchMd(filePath);

  const { code, frontmatter: metadata } = markdown;

  return (
    <div>
      <Header background={post.background} lastModifiedDate={post.lastModifiedDate} title={post.title} />
      <Paragraph>{post.abstract}</Paragraph>
      <article>
        <MdxContent code={code}/>
      </article>
    </div>
  );
}
