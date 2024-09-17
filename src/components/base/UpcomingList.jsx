import React from 'react';

import { UpcomingItem } from './UpcomingItem';

import sick from '../../app/images/icons/sick.svg';
import moneybox from '../../app/images/icons/moneybox.svg';

export function UpcomingList() {
    return (
        <div>
            <UpcomingItem image={sick} imageAlt='' date='Jan 27' day='1 dey of Sick' dot={true} />
            <UpcomingItem image={moneybox} imageAlt='' date='Jul 4' day='Independence Day' />
        </div>
    )
}
