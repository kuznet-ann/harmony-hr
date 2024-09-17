import React from 'react';

import Image from 'next/image';
import { TimeOffList } from './TimeOffList';
import { Devider } from './Devider';
import { SectionTitle } from './SectionTitle';
import { UpcomingList } from './UpcomingList';
import { History } from './History';

import timeOff from '../../app/images/icons/time-off.svg';
import clock from '../../app/images/icons/clock.svg';
import history from '../../app/images/icons/history.svg';

export function TimeOffBlock() {
    return (
        <div className='max-w-[1047px] w-full bg-card ml-auto mr-0 rounded-b-lg px-4 pt-10 pb-24'>
            <div className="flex justify-between">
                <div className="flex gap-3 items-center">
                    <Image
                        src={timeOff}
                        alt='Schedule with clock in upper right corner icon'
                        width={16}
                        height={16} />
                    <h2 className='font-medium text-xl text-chart-1'>Time Off</h2>
                </div>

                <div className="mb-3 flex gap-8 items-end">
                    <p className='font-medium text-sm'>Accrual Level Start Date <span className='text-chart-3'>03/09-2020</span></p>
                    <button className='p-2 border-2 border-black rounded-lg text-sm font-medium transition-colors hover:bg-accent hover:text-white'>Add Time Off Policy</button>
                </div>
            </div>
            <Devider />

            <TimeOffList />

            <SectionTitle image={clock} imageAlt='Clock icon' text='Upcoming Time Off' />
            <UpcomingList />

            <SectionTitle image={history} imageAlt='Square clock icon' text='History' />
            <History />

        </div>
    )
}
