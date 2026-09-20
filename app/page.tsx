import { Contact } from '@components/Home/Contact';

import CV from '@components/Home/CV';

import { Linktree } from '@components/Home/Linktree';

import { Profile } from '@components/Home/Profile';

import { Research } from '@components/Home/Research';

export default function Page() {
    return (
        <div>
            <Profile />

            <CV />

            <Research />

            <Linktree />

            <Contact />
        </div>
    );
}
