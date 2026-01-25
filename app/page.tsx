import { promises } from "fs";

import Avatar from "@components/avatar";
import Blockquote from "@components/blockquote";
import Link from "@components/link";
import { LinkTree, LinkTreeItem  } from "@components/linktree";

export default async function Page() {
  const file = await promises.readFile(process.cwd() + "/app/linktree.json", "utf-8");

  const items: LinkTreeItem[] = JSON.parse(file);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-black sm:items-start gap-6">
        <Avatar/>
        <Blockquote author="Paul McCartney" quote="Live a little, be a gypsy, get around / Get your feet up off the ground"/>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Links.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for other stuff? I probably deleted it. To see what I've been up to, check out my <Link href="https://github.com/AssoDePicche/">GitHub</Link>.
          </p>
        </div>
        <div className="mt-2">
          <LinkTree items={items}/> 
        </div>
      </main>
    </div>
  );
}
