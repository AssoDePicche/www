import Link from "next/link";

interface NavItem {
  name: string;
  path: string;
}

export default function Component() {
  const items: NavItem[] = [
    { name: "~/", path: "/" },
  ];

  return (
    <header className="flex items-center justify-between px-4">
      <nav>
        <ul className="flex items-center gap-2">
          { items.map((item, index) => (
            <li key={index}>
              <Link href={item.path}>
                <span>{item.name}</span>
              </Link>
            </li>
          )) }
        </ul>
      </nav>
    </header>
  );
}
