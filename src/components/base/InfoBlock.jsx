'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { AccountMenu } from './AccountMenu';
import { AccountServices } from './AccountServices';

import avatar from '../../app/images/avatar.png';
import more from '../../app/images/icons/more.svg';

export function InfoBlock() {
    const [windowSize, setWindowSize] = useState(0);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowSize(window.innerWidth);
        });
    }, []);

    return (
        <div className='relative w-full mx-auto pt-6 lg:pt-0 xl:w-[1296px]'>
            <div className='absolute top-6 w-[60px] inline-block ml-[34px] z-10 md:w-24 lg:ml-14 lg:w-[150px] lg:top-8 xl:ml-[37px]'>
                <Image
                    className='inline-block'
                    src={avatar}
                    width={150}
                    height={150}
                    alt='Picture of the user'
                />
            </div>

            <div className='pl-[150px] mr-0 w-full flex justify-between items-center sm:pt-4 md:ml-auto md:pt-8 md:pr-6  lg:pl-60 lg:pt-[67px] xl:max-w-[1046px] xl:pl-0'>
                <h1 className='font-semibold w-[214px] text-xl sm:w-auto md:text-2xl lg:text-[28px] '>
                    Alexandra Kuibyshevskaya
                </h1>

                {windowSize > 1023 ? (
                    <AccountServices />
                ) : (
                    <button className='mr-6'>
                        <Image
                            src={more}
                            alt='More icon'
                            width={16}
                            height={16}
                        />
                    </button>
                )}
            </div>

            <AccountMenu />
        </div>
    );
}
