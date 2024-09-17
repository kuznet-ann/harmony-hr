import React from 'react';

import Image from 'next/image';

import arrowDown from '../../app/images/icons/long-arrow-down.svg';

export function HistoryTable(balance) {
    return (
        <table className='mt-4 w-full font-medium text-sm text-left border-collapse'>
            <thead className='bg-secondary'>
                <th className='pl-2 py-4 flex gap-1'>
                    Date{' '}
                    <Image
                        src={arrowDown}
                        alt='Arrow down'
                        width={16}
                        height={16}
                    />
                </th>
                <th className='pl-2 py-4'>Description</th>
                <th className='pl-2 py-4'>Used Days (-)</th>
                <th className='pl-2 py-4'>Earned Days (+)</th>
                <th className='pl-2 py-4'>Balance</th>
            </thead>
            <tbody>
                {balance.balance.map((el, i) => (
                    <tr
                        className='border-b-2 border-primary transition-colors hover:bg-secondary/[.6]'
                        key={i}>
                        <td className='pl-2 py-2'>{el.date}</td>
                        <td className='pl-2 py-2'>{el.description}</td>
                        <td className='pl-2 py-2'>{el.used_days}</td>
                        <td className='pl-2 py-2'>{el.earned_days}</td>
                        <td className='pl-2 py-2'>{el.balance}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
