import React from 'react';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export function TimeOffCard({ title, image, imageAlt, nums, subtitle, text, subtext }) {
    return (
        <div className='max-w-[264px] w-full'>
            <Card className='p-4 min-h-[138px] grid items-center bg-[#F0F3F8]'>
                <CardHeader className='p-0'>
                    <CardTitle className='font-semibold text-xl text-center leading-[100%]'>{title}</CardTitle>
                </CardHeader>
                <CardContent className='p-0 text-center'>
                    <div className='mb-1 flex justify-center gap-[10px]'>
                        <Image
                            src={image}
                            alt={imageAlt}
                            width={30}
                            height={30}
                        />
                        <span className='font-semibold text-3xl text-accent'>{nums}</span>
                    </div>
                    <p className='font-semibold text-sm leading-[100%]'>{subtitle}</p>
                    {text ? (
                        <p className='mt-1 font-semibold text-sm text-chart-2 leading-[100%]'>{text}</p>
                    ) : (
                        ''
                    )}
                </CardContent>
            </Card>
            <p className='mt-2 font-medium text-sm text-chart-2 text-center'>{subtext}</p>
        </div>
    );
}
