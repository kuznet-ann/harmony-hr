import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import arrow from '../../app/images/icons/arrow-down.svg';

export function AccountMenu() {
    return (
        <div className='relative overflow-x-scroll pt-6 w-full lg:overflow-hidden sm:pt-9 md:pt-12 lg:pt-[28px] lg:ml-[251px] lg:w-3/4 xl:max-w-[1046px] xl:w-full'>
            <nav className='mr-0 flex justify-between w-[1046px] '>
                <Link
                    href={'#'}
                    className='p-4 rounded-t-lg font-medium text-sm transition-all hover:bg-card [&.active]:bg-card'>
                    Personal
                </Link>
                <Link
                    href={'#'}
                    className='p-4 rounded-t-lg font-medium text-sm transition-all hover:bg-card [&.active]:bg-card'>
                    Job
                </Link>
                <Link
                    href={'#'}
                    className='active p-4 rounded-t-lg font-medium text-sm transition-all hover:bg-card [&.active]:bg-card'>
                    Time Off
                </Link>
                <Link
                    href={'#'}
                    className='p-4 rounded-t-lg font-medium text-sm transition-all hover:bg-card [&.active]:bg-card'>
                    Emergency
                </Link>
                <Link
                    href={'#'}
                    className='p-4 rounded-t-lg font-medium text-sm transition-all hover:bg-card [&.active]:bg-card'>
                    Documents
                </Link>
                <Link
                    href={'#'}
                    className='p-4 rounded-t-lg font-medium text-sm transition-all hover:bg-card [&.active]:bg-card'>
                    Notes
                </Link>
                <Link
                    href={'#'}
                    className='p-4 rounded-t-lg font-medium text-sm transition-all hover:bg-card [&.active]:bg-card'>
                    Benefits
                </Link>
                <Link
                    href={'#'}
                    className='p-4 rounded-t-lg font-medium text-sm transition-all hover:bg-card [&.active]:bg-card'>
                    Training
                </Link>
                <Link
                    href={'#'}
                    className='p-4 rounded-t-lg font-medium text-sm transition-all hover:bg-card [&.active]:bg-card'>
                    Assets
                </Link>
                <Link
                    href={'#'}
                    className='p-4 flex gap-2.5 rounded-t-lg font-medium text-sm transition-all hover:bg-card [&.active]:bg-card'>
                    More
                    <Image
                        src={arrow}
                        width={22}
                        height={22}
                        alt='Select arrow'
                    />
                </Link>
            </nav>
        </div>
    );
}
