import React from 'react';

import Image from 'next/image';
import { Devider } from './Devider';

export function UpcomingItem({ image = '', imageAlt = '', date = '', day = '', dot = false }) {
    return (
        <>
            <div className='mb-6 flex gap-[14px]'>
                <Image
                    src={image}
                    alt={imageAlt}
                    width={30}
                    height={20}
                />

                <div>
                    <p className='font-medium text-sm'>{date}</p>
                    <p className='font-medium text-sm'>
                        {dot ? (
                            <span className='mr-1 w-2 h-2 inline-block rounded-full bg-accent'></span>
                        ) : (
                            ''
                        )}
                        {day}
                    </p>
                </div>
            </div>
            <Devider />
        </>
    );
}
