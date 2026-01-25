import Image from "next/image";

import WIP from "@images/wip.gif";

export default function Page() {
  return (
    <div>
      <p className="text-center">Please come back later.</p>
      <div>
        <Image
          className="w-full"
          src={WIP}
          alt="WIP"
          width={100}
          height={100}
          priority
        />
      </div>
    </div>
  );
}
