import Image from 'next/image'

import search from '../../app/images/icons/search.svg';

export function Searchbar() {
    return (
        <form className='w-[395px] relative' >
            <input
                className='w-full p-2 pl-12 border-[1px] border-accent placeholder-primary rounded-xl text-lg outline-0'
                type='search'
                placeholder='Search'
            />
            <button className='absolute left-[16px] top-1/2 -translate-y-1/2'>
                <Image
                    src={search}
                    width={16}
                    height={16}
                    alt='Search icon'
                />
            </button>
        </form>
    )

}