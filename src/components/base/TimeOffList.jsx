import React from 'react';

import { TimeOffCard } from './TimeOffCard';

import sick from '../../app/images/icons/sick.svg';
import mountains from '../../app/images/icons/mountains.svg';
import timeOff from '../../app/images/icons/time-off.svg';

const userStatistics = [
    {
        title: 'Sick',
        icon: sick,
        nums: 3,
        subtitle: 'Days Available',
        text: '1 dey scheduled',
        subtext: 'Sick Full-Time',
    },
    {
        title: 'Annual Leave',
        icon: mountains,
        nums: 10.3,
        subtitle: 'Days Available',
        text: '',
        subtext: 'Holiday Full-Time',
    },
    {
        title: 'Comp/in Lieu Time',
        icon: timeOff,
        nums: 0,
        subtitle: 'Human Used(YTD)',
        text: '',
        subtext: 'Comp/in Lieu Time Flexible Policy',
    },
];

export function TimeOffList() {
    return (
        <div className='mx-auto mb-6 max-w-[888px] w-full flex justify-between'>
            {userStatistics.map((el, i) => (
                <TimeOffCard
                    key={i}
                    title={el.title}
                    image={el.icon}
                    imageAlt=''
                    nums={el.nums}
                    subtitle={el.subtitle}
                    text={el.text}
                    subtext={el.subtext}
                />
            ))}
        </div>
    );
}
