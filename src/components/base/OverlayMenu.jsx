import React from 'react';
import Link from 'next/link';

import { SetupLinks } from './SetupLinks';

export function OverlayMenu({ active }) {

    return (
        <div className={`${active ? 'active' : ''} z-10 px-8 py-6 w-full h-full absolute top-0 right-[-100%] bg-secondary transition-all duration-300 [&.active]:right-0 sm:w-1/2 sm:right-[-50%]`}>
            <nav className='mb-4 flex flex-col'>
                <Link
                    href={'#'}
                    className='p-4 pl-0 text-lg rounded-t-lg transition-all hover:bg-secondary [&.active]:bg-secondary'>
                    Home
                </Link>
                <Link
                    href={'#'}
                    className='active p-4 pl-0 text-lg rounded-t-lg transition-all hover:bg-secondary [&.active]:bg-secondary'>
                    My Info
                </Link>
                <Link
                    href={'#'}
                    className='p-4 pl-0 text-lg rounded-t-lg transition-all hover:bg-secondary [&.active]:bg-secondary'>
                    People
                </Link>
                <Link
                    href={'#'}
                    className='p-4 pl-0 text-lg rounded-t-lg transition-all hover:bg-secondary [&.active]:bg-secondary'>
                    Hiring
                </Link>
                <Link
                    href={'#'}
                    className='p-4 pl-0 text-lg rounded-t-lg transition-all hover:bg-secondary [&.active]:bg-secondary'>
                    Reports
                </Link>
                <Link
                    href={'#'}
                    className='p-4 pl-0 text-lg rounded-t-lg transition-all hover:bg-secondary [&.active]:bg-secondary'>
                    Files
                </Link>
            </nav>

            <SetupLinks />
        </div>
    )
}
