import React from 'react';

import Image from 'next/image';
import { Devider } from './Devider';

export function SectionTitle({ image, imageAlt, text }) {
    return (
        <>
            <div className='mb-4 flex gap-3 items-center'>
                <Image
                    src={image}
                    alt={imageAlt}
                    width={16}
                    height={16}
                />
                <h2 className='font-medium text-sm text-chart-1'>{text}</h2>
            </div>
            <Devider />
        </>
    );
}
