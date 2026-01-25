interface Properties {
  author: string;
  cite?: string;
  quote: string;
}

export default function Component(properties: Properties) {
  return (
    <blockquote cite={properties?.cite} className="leading-8 text-lg text-zinc-400">
      <p className="italic text-justify">&quot;{properties.quote}&quot;</p>
      <footer>
        <p>&mdash; {properties.author}</p>
      </footer>
    </blockquote>
  );
}
