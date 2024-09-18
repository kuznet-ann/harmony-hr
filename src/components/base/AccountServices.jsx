import React from 'react';
import Image from 'next/image';

import arrow from '../../app/images/icons/arrow-down.svg';
import settings from '../../app/images/icons/settings.svg';

export function AccountServices() {
    return (
        <ul className='flex justify-between w-[234px] h-[38px]'>
            <li className='flex gap-2 p-2 border-[1px] border-primary rounded-lg text-sm'>
                Request a Change
                <Image
                    src={arrow}
                    width={16}
                    height={16}
                    alt='Select arrow'
                />
            </li>
            <li className='flex gap-2 p-2 border-[1px] border-primary rounded-lg'>
                <Image
                    src={settings}
                    alt='Setting icon'
                    width={16}
                    height={16}
                />
                <Image
                    src={arrow}
                    width={16}
                    height={16}
                    alt='Select arrow'
                />
            </li>
        </ul>
    );
}
