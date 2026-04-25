import path from 'path';

import { MdxContent } from '@components/Blog/MdxContent';

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

  const markdown = await fetchMd(filePath);

  const { code, frontmatter: metadata } = markdown;

  return (
    <div>
      <MdxContent code={code}/>
    </div>
  );
}
