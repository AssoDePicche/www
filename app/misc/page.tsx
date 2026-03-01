import { Library } from "@components/library";

import { promises } from "fs";

export default async function Page() {
 const file = await promises.readFile(process.cwd() + "/app/library.json", "utf-8");

  const books: string[] = JSON.parse(file); 

  return (
    <div className="flex items-center font-sans w-full flex-col justify-center sm:items-start gap-6">
      <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <div>
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-zinc-50">
            Library.
          </h1>
        
          <Library books={books}/>
        </div>
      </div>

    </div>
  );
}
