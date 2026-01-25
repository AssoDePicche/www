import { FC, ReactNode } from "react";

interface Properties {
  children: ReactNode;
  href: string;
}

const Component: FC<Properties> = (properties: Properties) => {
  return (
    <a className="font-medium text-zinc-950 dark:text-zinc-50" href={properties.href}>
      { properties.children }
    </a>
  );
};

export default Component;
