import { FC, ReactNode } from "react";

interface Properties {
  children: ReactNode;
  href: string;
}

const Component: FC<Properties> = (properties: Properties) => {
  return (
    <a
      className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
      href={properties.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      { properties.children }
    </a>
  );
};

export default Component;
