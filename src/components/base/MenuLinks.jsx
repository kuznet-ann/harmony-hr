import React from 'react'

import Link from 'next/link'

export function MenuLinks() {
    return (
        <nav className='mt-6'>
            <Link
                href={'#'}
                className='p-4 text-lg rounded-t-lg transition-all hover:bg-secondary &.active]:bg-secondary'>
                Home
            </Link>
            <Link
                href={'#'}
                className='active p-4 text-lg rounded-t-lg transition-all hover:bg-secondary [&.active]:bg-secondary'>
                My Info
            </Link>
            <Link
                href={'#'}
                className='p-4 text-lg rounded-t-lg transition-all hover:bg-secondary &.active]:bg-secondary'>
                People
            </Link>
            <Link
                href={'#'}
                className='p-4 text-lg rounded-t-lg transition-all hover:bg-secondary &.active]:bg-secondary'>
                Hiring
            </Link>
            <Link
                href={'#'}
                className='p-4 text-lg rounded-t-lg transition-all hover:bg-secondary &.active]:bg-secondary'>
                Reports
            </Link>
            <Link
                href={'#'}
                className='p-4 text-lg rounded-t-lg transition-all hover:bg-secondary &.active]:bg-secondary'>
                Files
            </Link>
        </nav>
    )
}
