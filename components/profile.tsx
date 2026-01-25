import { differenceInYears } from "date-fns";

import { FC } from "react";

import Avatar from "@components/avatar";
import Blockquote from "@components/blockquote";

export default function Component() {
  const years = differenceInYears(new Date(), new Date(2004, 7, 27));

  return (
    <>
      <div className="w-full flex flex-col items-center sm:items-start">
        <Avatar/>
        <div className="mt-2 flex flex-col items-center sm:items-start">
          <span className="text-xl font-semibold text-zinc-50">Samuel, {years}</span>
          <span className="flex font-semibold items-center text-zinc-300">R&D @ Nanocomm S.A.</span>
        </div>
      </div>
      <Blockquote author="Paul McCartney" quote="Live a little, be a gypsy, get around / Get your feet up off the ground"/>
    </>
  );
}
