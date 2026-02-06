import Link from 'next/link';

export interface BibItem {
  authors: string[];
  href: string;
  page?: number;
  publisher: string;
  title: string;
  year: number;
}

interface Properties {
  items: BibItem[];
}

export function Bibliography(properties: Properties) {
  return (
    <ul>
      { properties.items.map((item, index) => {
        const authors: string = item.authors.join('; ').slice(0, -4);

        const pageSuffix: string = item?.page ? ', ' + item.page : '';

        return (<li key={index} className="mb-4 text-medium leading-6 text-justify text-zinc-400">
          <Link href={item.href} target="_blank" rel="noopener noreferrer">
           {`${authors}. (${item.year}). ${item.title}. ${item.publisher} ${pageSuffix}.`}
          </Link>
        </li>
      )
      })}
    </ul>
  );
}
