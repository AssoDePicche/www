import { Card } from '@components/Blog/Post';

import { Paragraph, Title } from '@components/Typography';

import { fetchPosts, type Post } from '@lib/blog';

import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const EmptyState = () => {
  return (
    <Paragraph>
      Ops! Ainda não escrevi nada :P
    </Paragraph>
  );
};

export default function Page() {
  const posts: Post[] = fetchPosts();

  return (
    <div>
      <Title>Blog.</Title>

      <Paragraph>Às vezes eu escrevo, outras vezes torno público.</Paragraph>

      <Container>
        { posts.length === 0 && ( <EmptyState /> )}
        { posts.map((post: Post, index: number) => <Card key={index} post={post} /> )}
      </Container>
    </div>
  );
}
