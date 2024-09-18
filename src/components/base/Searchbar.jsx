import Image from 'next/image';

import search from '../../app/images/icons/search.svg';

export function Searchbar({ active }) {
    return (
        <form
            className={`${active ? '' : 'hidden'
                } absolute z-2 top-6 left-1/2 -translate-x-1/2 w-full max-w-[395px] sm:block sm:relative sm:left-auto sm:top-auto sm:-translate-x-0`}>
            <input
                className='w-full p-2 pl-12 border-[1px] border-accent placeholder-primary rounded-xl text-lg outline-0'
                type='search'
                placeholder='Search'
            />
            <button className='absolute left-[16px] top-1/2 -translate-y-1/2 '>
                <Image
                    src={search}
                    width={16}
                    height={16}
                    alt='Search icon'
                />
            </button>
        </form>
    );
}
