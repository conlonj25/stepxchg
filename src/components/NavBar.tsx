import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { ModeToggle } from './ModeToggle';
import UserDisplay from './UserDisplay';

const NavBar = () => (
	<div className="bg-card text-card-foreground text-4xl -bold font-bold flex justify-between p-2">
		<span>
			<span>STEP</span>
			<span className="text-primary">xchg</span>
		</span>

		<div className="flex gap-2">
			<ModeToggle />
			<UserDisplay />
			<Avatar>
				<AvatarImage src="https://github.com/conlonj25.png" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
		</div>
	</div>
);

export default NavBar;
