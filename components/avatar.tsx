import Image from "next/image";

import { AspectRatio } from "@shadcn/components/ui/aspect-ratio";

export default function Component() {
  return (
    <div className="w-full max-w-[12rem]">
      <AspectRatio ratio={1 / 1} className="bg-muted rounded-lg">
        <Image
          className="rounded-lg w-full"
          src="https://avatars.githubusercontent.com/u/86676526?v=4"
          alt="Samuel do Prado Rodrigues"
          width={100}
          height={100}
          priority
        />
      </AspectRatio>
    </div>
  );
}
