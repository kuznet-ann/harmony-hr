import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import settings from '../../app/images/icons/settings.svg';
import qa from '../../app/images/icons/Q&A.svg';
import notifications from '../../app/images/icons/notification.svg';
import avatar from '../../app/images/avatar.png';


export function SetupLinks() {
    return (
        <ul className='w-48 flex justify-between items-center'>
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
            <li>
                <Link href={'#'}>
                    <Image
                        src={avatar}
                        width={38}
                        height={38}
                        alt='Picture of the user'
                    />
                </Link>
            </li>
        </ul>
    )
}
