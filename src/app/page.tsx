import { HeaderBlock } from '../components/base/HeaderBlock';
import { InfoBlock } from '../components/base/InfoBlock';
import { AsideBlock } from '../components/base/AsideBlock';

export default function Home() {
	return (
		<main>
			<HeaderBlock />
			<div className='relative w-full h-[185px] bg-secondary'>
				<InfoBlock />
			</div>
			<div className='w-[1296px] mx-auto'>
				<AsideBlock />
			</div>
		</main>
	);
}
