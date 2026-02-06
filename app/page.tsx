import { promises } from "fs";

import { Bibliography, BibItem } from "@components/bibliography";
import Link from "@components/link";
import { LinkTree, LinkTreeItem  } from "@components/linktree";
import Profile from "@components/profile";

export default async function Page() {
  const bibliographyItemsFile = await promises.readFile(process.cwd() + "/app/bibliography.json", "utf-8");

  const bibliographyItems: BibItem[] = JSON.parse(bibliographyItemsFile);

  const linkTreeItemsFile = await promises.readFile(process.cwd() + "/app/linktree.json", "utf-8");

  const linkTreeItems: LinkTreeItem[] = JSON.parse(linkTreeItemsFile);

  return (
      <div className="flex items-center font-sans w-full flex-col justify-center sm:items-start gap-6">
        <Profile/>

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-zinc-50">
            Research.
          </h1>

          <Bibliography items={bibliographyItems}/>
        </div>

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-zinc-50">
            Links.
          </h1>
          <p className="text-lg leading-8 text-zinc-400">
            Looking for other stuff? To see what I've been up to, check out my <Link href="https://github.com/AssoDePicche/">GitHub</Link>.
          </p>
        </div>

        <div className="mt-2">
          <LinkTree items={linkTreeItems}/> 
        </div>
      </div>
  );
}
