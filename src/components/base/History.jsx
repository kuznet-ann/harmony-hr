import React from 'react';

import { HistoryTable } from './HistoryTable';

const balance = [
    {
        date: "23/05/2024",
        description: "Accrual for 23/05/2024 to 20/11/2024",
        used_days: null,
        earned_days: 3.00,
        balance: 3.00,
    },
    {
        date: "23/05/2024",
        description: "Accrual for 23/05/2024 to 20/11/2024",
        used_days: -6,
        earned_days: null,
        balance: 3.00,
    },
    {
        date: "23/05/2024",
        description: "Accrual for 23/05/2024 to 20/11/2024",
        used_days: null,
        earned_days: 3.00,
        balance: 3.00,
    },
    {
        date: "23/05/2024",
        description: "Accrual for 23/05/2024 to 20/11/2024",
        used_days: null,
        earned_days: 3.00,
        balance: 3.00,
    },
    {
        date: "23/05/2024",
        description: "Accrual for 23/05/2024 to 20/11/2024",
        used_days: -6,
        earned_days: null,
        balance: 3.00,
    },
    {
        date: "23/05/2024",
        description: "Accrual for 23/05/2024 to 20/11/2024",
        used_days: null,
        earned_days: 3.00,
        balance: 3.00,
    },
]

export function History() {
    return (
        <div>
            <select name="why" id="why" className='py-1 px-[6px] w-64 text-base rounded-lg border-primary border-2'>
                <option defaultChecked value="sick">Sick</option>
            </select>

            <select name="why" id="why" className='ml-4 py-1 px-[6px] w-24 text-base rounded-lg border-primary border-2'>
                <option defaultChecked value="sick">All</option>
            </select>

            <select name="why" id="why" className='float-right py-1 px-[6px] w-[176px] text-base rounded-lg border-primary border-2'>
                <option defaultChecked value="sick">Balance History</option>
            </select>
            <HistoryTable balance={balance} />
        </div>
    )
}
