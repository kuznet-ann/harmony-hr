import React from 'react';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

import phone from '../../app/images/icons/phone.svg';
import mail from '../../app/images/icons/email.svg';
import hashtag from '../../app/images/icons/hashtag.svg';
import clock from '../../app/images/icons/clock.svg';
import people from '../../app/images/icons/people.svg';
import web from '../../app/images/icons/web.svg';
import location from '../../app/images/icons/location.svg';
import acount from '../../app/images/icons/acount.svg';


import linkedIn from '../../app/images/social/linkedin.svg';
import facebook from '../../app/images/social/facebook.svg';
import twitter from '../../app/images/social/twitter.svg';

// Тестовые данные
const reportsInfo = [
    {
        name: 'Shane'
    },
    {
        name: 'Nathan'
    },
    {
        name: 'Mitchell'
    },
    {
        name: 'Philip'
    },
    {
        name: 'Alex'
    },
    {
        name: 'Tim'
    },
    {
        name: 'Stan'
    },
    {
        name: 'Dipper'
    },
]

export function AsideBlock() {
    return (
        <aside className='absolute w-56 flex flex-col items-center'>

            <Card className='mb-4 p-6 w-full'>
                <CardContent className='p-0'>
                    <a className='mb-4 flex font-bold text-sm' href='tel:+07911654321'>
                        <Image className='mr-2' src={phone} alt='Phone icon' />
                        07911 654321
                    </a>
                    <a className='mb-4 flex font-medium text-sm' href='mailto:avd.yana@videorollnet'>
                        <Image className='mr-2' src={mail} alt='Mail icon' />
                        avd.yana@videorollnet
                    </a>

                    <ul className='flex justify-between w-[76px]'>
                        <li>
                            <a href="https://www.linkedin.com/">
                                <Image src={linkedIn} alt='LinkedIn icon' />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/">
                                <Image src={facebook} alt='Facebook icon' />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/?lang=en">
                                <Image src={twitter} alt='Twitter icon' />
                            </a>
                        </li>
                    </ul>
                </CardContent>
            </Card>

            <Card className='mb-4 p-6 w-full border-none shadow-none'>
                <CardHeader className='mb-4 p-0 '>
                    <CardTitle className='flex font-medium text-sm'>Hire Date</CardTitle>
                </CardHeader>

                <CardContent className='p-0'>
                    <p className='mb-2 flex font-medium text-sm'>
                        Sep. 3,2020
                    </p>
                    <p className='flex font-medium text-sm'>
                        3y - 9m - 20d
                    </p>
                </CardContent>
            </Card>

            <Card className='mb-4 p-6 w-full border-none shadow-none'>
                <CardContent className='p-0'>
                    <p className='mb-2 flex font-medium text-sm'>
                        <Image className='mr-2' src={hashtag} alt='Phone icon' />
                        5
                    </p>
                    <p className='mb-2 flex font-medium text-sm'>
                        <Image className='mr-2' src={clock} alt='Mail icon' />
                        Full-Time
                    </p>
                    <p className='mb-2 flex font-medium text-sm'>
                        <Image className='mr-2' src={people} alt='Mail icon' />
                        Operations
                    </p>
                    <p className='mb-2 flex font-medium text-sm'>
                        <Image className='mr-2' src={web} alt='Mail icon' />
                        Europe
                    </p>
                    <p className='flex font-medium text-sm'>
                        <Image className='mr-2' src={location} alt='Mail icon' />
                        London, UK
                    </p>
                </CardContent>
            </Card>

            <Card className='p-6 w-full border-none shadow-none'>
                <CardHeader className='mb-4 p-0'>
                    <CardTitle className='flex font-medium text-sm'>Direct Reports</CardTitle>
                </CardHeader>

                <CardContent className='p-0'>
                    {reportsInfo.slice(0, 4).map((el) => (
                        <p className='mb-2 flex font-medium text-sm'>
                            <Image className='mr-2' src={acount} alt='Phone icon' />
                            {el.name}
                        </p>
                    ))}
                    {reportsInfo.length > 4 ?
                        <p className='flex font-medium text-sm'>
                            <Image className='mr-2' src={people} alt='Mail icon' />
                            {reportsInfo.length - 4} More...
                        </p> : ''
                    }
                </CardContent>
            </Card>
        </aside>
    );
}
