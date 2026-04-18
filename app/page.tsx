import { Linktree } from '@components/Home/Linktree';

import { Profile } from '@components/Home/Profile';

import { Research } from '@components/Home/Research';

export default function Page() {
  return (
    <div>
      <Profile />

      <Research />

      <Linktree />
    </div>
  );
}
