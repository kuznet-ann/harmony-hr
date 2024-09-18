'use client';
import { useEffect, useState } from 'react';

import { HeaderBlock } from '../components/base/HeaderBlock';
import { InfoBlock } from '../components/base/InfoBlock';
import { AsideBlock } from '../components/base/AsideBlock';
import { TimeOffBlock } from '../components/base/TimeOffBlock';

export default function Home() {
	const [windowSize, setWindowSize] = useState(0);

	useEffect(() => {
		window.addEventListener('resize', () => {
			setWindowSize(window.innerWidth);
		});
	}, []);

	return (
		<main>
			<HeaderBlock />
			<div className='relative w-full h-[157px] bg-secondary md:h-[185px]'>
				<InfoBlock />
			</div>
			<div className='w-full max-w-[1297px] mx-auto'>
				{windowSize > 1023 ? <AsideBlock /> : ''}
				<TimeOffBlock />
			</div>
		</main>
	);
}
