import React from 'react';

import Link from 'next/link';

import { Searchbar } from './Searchbar';
import { MenuLinks } from './MenuLinks';
import { SetupLinks } from './SetupLinks';

export function HeaderBlock() {
    return (
        <header className='w-full pt-8 px-6 pb-2 bg-card'>
            <div className='mx-auto w-[1392px] flex justify-between items-start'>
                <Link href='#'>
                    <p className='font-semibold text-xl'>HarmonyHR</p>
                </Link>

                <MenuLinks />
                <Searchbar />
                <SetupLinks />

            </div>
        </header>
    );
}
