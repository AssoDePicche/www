import { MdxContent } from '@components/Blog/MdxContent';

import { fetchPost, fetchPosts, type Post } from '@lib/blog';

import { fetchMd } from '@lib/mdx';

export async function generateStaticParams() {
  const posts: Post[] = fetchPosts();

  return posts.map((post: Post) => ({ slug: post.path }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const post: Post = fetchPost(slug + '.mdx');

  const path = process.cwd() + '/blog/' + post.path + '.mdx';

  const markdown = await fetchMd(path);

  const { code, frontmatter: metadata } = markdown;

  return (
    <div>
      <MdxContent code={code}/>
    </div>
  );
}
