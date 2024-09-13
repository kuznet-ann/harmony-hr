import { HeaderBlock } from '../components/base/HeaderBlock';
import { AsideBlock } from '../components/base/AsideBlock';

export default function Home() {
	return (
		<main>
			<HeaderBlock />
			<div className='w-full h-[185px] bg-secondary z-0'></div>
			<div className='w-[1296px] mx-auto'>
				<AsideBlock />
			</div>
		</main>
	);
}
