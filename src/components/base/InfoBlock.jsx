import React from 'react';

import Image from 'next/image';

import { AccountMenu } from './AccountMenu';

import avatar from '../../app/images/avatar.png';
import arrow from '../../app/images/icons/arrow-down.svg';
import settings from '../../app/images/icons/settings.svg';

export function InfoBlock() {
    return (
        <div className='w-[1296px] mx-auto'>
            <div className='absolute top-8 ml-[34px] z-10'>
                <Image
                    src={avatar}
                    width={150}
                    height={150}
                    alt='Picture of the user'
                />
            </div>
            <div className='pt-[67px] max-w-[1046px] flex justify-between ml-auto mr-0'>
                <h1 className='font-semibold text-3xl'>Alexandra Kuibyshevskaya</h1>
                <ul className='flex justify-between w-[234px]'>
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
            </div>

            <AccountMenu />
        </div>
    );
}
