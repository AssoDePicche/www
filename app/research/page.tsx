import { promises } from "fs";

import { Bibliography, BibItem } from "@components/bibliography";

export default async function Page() {
  const file = await promises.readFile(process.cwd() + "/app/bibliography.json", "utf-8");

  const items: BibItem[] = JSON.parse(file);

  return (
    <div className="flex items-center font-sans w-full flex-col justify-center sm:items-start gap-6">
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-zinc-50">
        Research.
      </h1>

        <p className="text-lg leading-8 text-zinc-400 text-justify">
          My research focuses on computational methods for optimization in elastic optical networks. I completed two CNPq-funded research projects. My interests include AI, telecommunications, and simulation models. 
        </p>

      <Bibliography items={items}/>
    </div>
  );
}
