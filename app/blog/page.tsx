import { formatDate } from 'date-fns';

import { ptBR } from 'date-fns/locale';

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
            Ainda não terminei de escrever nada :P
          </Paragraph>
        </div>
      )}

      {posts.map((post, index) => (
        <div key={index}>
          <h3>{post.title}</h3>
          <p>{post.abstract}</p>
          <span>{formatDate(post.lastModifiedDate, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}</span>
        </div>
      ))}
    </div>
  );
}
