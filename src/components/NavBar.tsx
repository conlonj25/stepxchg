import { ModeToggle } from './ModeToggle';

const NavBar = () => (
	<div className="bg-slate-600 text-white text-4xl -bold font-bold flex justify-between p-2">
		<span>
			<span>STEP</span>
			<span className="text-green-400">xchg</span>
		</span>

		<ModeToggle />
	</div>
);

export default NavBar;
