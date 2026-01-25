import { promises } from "fs";

import { FC } from "react";

import Button from "@components/button";

export interface LinkTreeItem {
  name: string;
  href: string;
}

interface Properties {
  items: LinkTreeItem[];
}

export const LinkTree: FC<Properties> = (properties: Properties) => {
  return (
    <div className="flex gap-4 text-base font-medium flex-wrap">
      { properties.items.map((item, index) => (
        <Button href={item.href} key={index}>{item.name}</Button>
      )) }
    </div>
  );
};
