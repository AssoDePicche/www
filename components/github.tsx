import Link from "next/link";

import { Button } from "@shadcn/components/ui/button";

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@shadcn/components/ui/item";

import { format } from "date-fns";

interface Properties {
  name: string;
  description: string;
  url: string;
  updatedAt: string;
  language: string;
}

export default function Component(properties: Properties) {
  const lastUpdate = format(new Date(properties.updatedAt), "dd/MM/yy");

  return (
<Item variant="outline" size="sm">
  <ItemContent>
    <ItemTitle>{properties.name.split("-").join(" ")}</ItemTitle>
    <ItemDescription>{`${properties.description || ''}. Updated on ${lastUpdate}.`}</ItemDescription>
  </ItemContent>
  <ItemActions>
    <Button variant="outline" size="sm">
      <Link href={properties.url} target="_blank" rel="noopener noreferrer">Open</Link>
    </Button>
  </ItemActions>
</Item>
  );
}
