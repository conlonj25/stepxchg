import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import UserDisplay from './UserDisplay';

const SideNav = () => (
	<div className="h-full flex flex-col gap-2 p-2">
		<Link
			className={'bg-primary p-2 text-lg rounded-md'}
			href={'/questions'}
		>
			Questions
		</Link>
	</div>
);

export default SideNav;
