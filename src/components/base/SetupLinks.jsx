import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import settings from '../../app/images/icons/settings.svg';
import qa from '../../app/images/icons/Q&A.svg';
import notifications from '../../app/images/icons/notification.svg';


export function SetupLinks() {
    return (
        <ul className='w-[117px] flex justify-between items-center'>
            <li>
                <Link href={''}>
                    <Image
                        src={settings}
                        width={24}
                        height={24}
                        alt='Settings icon'
                    />
                </Link>
            </li>
            <li>
                <Link href={'#'}>
                    <Image
                        src={qa}
                        width={24}
                        height={24}
                        alt='Q&A icon'
                    />
                </Link>
            </li>
            <li>
                <Link href={'#'}>
                    <Image
                        src={notifications}
                        width={24}
                        height={24}
                        alt='Notifications icon'
                    />
                </Link>
            </li>
        </ul>
    )
}
