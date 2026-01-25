import { FC } from "react";

interface Properties {
  author: string;
  cite?: string;
  quote: string;
}

const Component: FC<Properties> = (properties: Properties) => {
  return (
    <blockquote cite={properties?.cite}>
      <p className="italic">&quot;{properties.quote}&quot;</p>
      <footer>&mdash; {properties.author}</footer>
    </blockquote>
  );
};

export default Component;
