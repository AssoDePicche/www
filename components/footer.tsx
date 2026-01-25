import Link from "next/link";

import { FaGithub as Github } from "react-icons/fa6";

export default function Component() {
  const year: string = new Date().getFullYear().toString();

  return (
    <footer>
      <hr className="border-t border-zinc-600"/>
      <div className="flex items-center justify-between pt-2">
        <span className="flex gap-1 items-center">
          <time className="hidden sm:inline" dateTime={year}>{year}</time>
          <span className="hidden sm:inline text-zinc-600">-</span>
          <span>He</span>
          <span className="text-zinc-600">/</span>
          <span>Him</span>
        </span>
        <Link
          className="gap-1.5 inline-flex items-center underline"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          <span>AssoDePicche</span>
        </Link>
      </div>
    </footer>
  );
}
