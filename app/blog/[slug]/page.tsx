export async function generateStaticParams() {
  return [{ slug: 'teste'}];
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <div>
      Post {slug}
    </div>
  );
}
