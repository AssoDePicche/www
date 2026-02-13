import { ReactNode } from "react";

interface Properties {
  children: ReactNode;
  href: string;
}

export default function Component(properties: Properties) {
  return (
    <a className="font-medium text-zinc-50" href={properties.href}>
      { properties.children }
    </a>
  );
}
