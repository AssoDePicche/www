import { Card } from '@components/Blog/Post';

import { Paragraph, Title } from '@components/Typography';

import { fetchPosts, type Post } from '@lib/blog';

export default function Page() {
  const posts: Post[] = fetchPosts();

  return (
    <div>
      <Title>Posts</Title>

      { posts.length === 0 && (
        <div>
          <Paragraph>
            Ainda não escrevi nada :P
          </Paragraph>
        </div>
      )}

      {posts.map((post: Post, index: number) => <Card key={index} post={post} />)}
    </div>
  );
}
