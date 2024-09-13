import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import arrow from '../../app/images/icons/arrow-down.svg';

export function AccountMenu() {
    return (
        <nav className='pt-8 ml-auto mr-0 flex justify-between max-w-[1046px] w-full '>
            <Link
                href={'#'}
                className='p-4 text-lg rounded-t-lg font-medium text-sm transition-all hover:bg-card [&.active]:bg-card'>
                Personal
            </Link>
            <Link
                href={'#'}
                className='p-4 text-lg rounded-t-lg font-medium text-sm transition-all hover:bg-card [&.active]:bg-card'>
                Job
            </Link>
            <Link
                href={'#'}
                className='active p-4 text-lg rounded-t-lg font-medium text-sm transition-all hover:bg-card [&.active]:bg-card'>
                Time Off
            </Link>
            <Link
                href={'#'}
                className='p-4 text-lg rounded-t-lg font-medium text-sm transition-all hover:bg-card [&.active]:bg-card'>
                Emergency
            </Link>
            <Link
                href={'#'}
                className='p-4 text-lg rounded-t-lg font-medium text-sm transition-all hover:bg-card [&.active]:bg-card'>
                Documents
            </Link>
            <Link
                href={'#'}
                className='p-4 text-lg rounded-t-lg font-medium text-sm transition-all hover:bg-card [&.active]:bg-card'>
                Notes
            </Link>
            <Link
                href={'#'}
                className='p-4 text-lg rounded-t-lg font-medium text-sm transition-all hover:bg-card [&.active]:bg-card'>
                Benefits
            </Link>
            <Link
                href={'#'}
                className='p-4 text-lg rounded-t-lg font-medium text-sm transition-all hover:bg-card [&.active]:bg-card'>
                Training
            </Link>
            <Link
                href={'#'}
                className='p-4 text-lg rounded-t-lg font-medium text-sm transition-all hover:bg-card [&.active]:bg-card'>
                Assets
            </Link>
            <Link
                href={'#'}
                className='p-4 flex gap-2.5 text-lg rounded-t-lg font-medium text-sm transition-all hover:bg-card [&.active]:bg-card'>
                More
                <Image
                    src={arrow}
                    width={22}
                    height={22}
                    alt='Select arrow'
                />
            </Link>
        </nav>
    )
}
