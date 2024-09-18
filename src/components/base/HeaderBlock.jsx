'use client';

import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { Searchbar } from './Searchbar';
import { MenuLinks } from './MenuLinks';
import { SetupLinks } from './SetupLinks';
import { OverlayMenu } from './OverlayMenu';

import search from '../../app/images/icons/search.svg';
import hamburger from '../../app/images/icons/hamburger.svg';
import close from '../../app/images/icons/close.svg';
import avatar from '../../app/images/avatar.png';

export function HeaderBlock() {
    const [activeSearch, setActiveSearch] = useState(false);
    const [overlayActive, setOverlayActive] = useState(false);

    let windowWidth = 0;

    const [windowSize, setWindowSize] = useState(0);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowSize(window.innerWidth)
        })
    }, [])

    return (
        <>
            <header className='w-full py-[6px] px-6 pb-2 bg-card sm:py-3 xl:pt-8'>
                <div className='relative mx-auto w-full max-w-[1392px] flex justify-between items-center xl:items-start'>
                    <Link href='#'>
                        <p className='font-semibold text-xl'>HarmonyHR</p>
                    </Link>

                    <MenuLinks />

                    <button
                        onClick={() => {
                            setActiveSearch(!activeSearch);
                        }}
                        className='mt-1 py-2 px-4 border-[1px] border-black rounded-xl sm:hidden'>
                        <Image
                            src={search}
                            width={16}
                            height={16}
                            alt='Search icon'
                        />
                    </button>
                    <Searchbar active={activeSearch} />

                    <div className='flex'>
                        {windowSize > 1279 ? <SetupLinks /> : ''}

                        <button
                            onClick={() => {
                                setOverlayActive(!overlayActive);
                            }}
                            className='z-20 block xl:hidden'>
                            {overlayActive ?
                                <Image
                                    src={close}
                                    width={21}
                                    height={24}
                                    alt='Picture of the user'
                                /> :
                                <Image
                                    src={hamburger}
                                    width={21}
                                    height={24}
                                    alt='Picture of the user'
                                />
                            }
                        </button>
                        <Link
                            className='ml-6'
                            href={'/'}>
                            <Image
                                src={avatar}
                                width={38}
                                height={38}
                                alt='Picture of the user'
                            />
                        </Link>
                    </div>
                </div>
            </header>

            <OverlayMenu active={overlayActive} />
        </>
    );
}
