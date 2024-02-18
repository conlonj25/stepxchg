import Pencil from '@/components/icons/Pencil';
import Trash from '@/components/icons/Trash';
import { Badge } from '@/components/ui/badge';

const page = ({ params }: { params: { id: string } }) => {
	return (
		<div className="flex flex-col gap-2 p-3">
			<span className="flex justify-between">
				<span className="text-xl text-primary">Question Title</span>
				<span className="flex gap-2 text-xl text-primary">
					<Trash />
					<Pencil />
				</span>
			</span>

			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Maecenas lacinia lectus eu arcu fringilla vestibulum. Sed eu
				nisl enim. Maecenas nisl nulla, ultricies ac quam vel, mattis
				auctor odio. Aliquam porta turpis a maximus tempor. Curabitur
				mollis erat eget tortor gravida, convallis pulvinar nunc
				blandit. Pellentesque fringilla tempus est, vitae eleifend purus
				sollicitudin eget. Donec sed tristique mi. Nullam pulvinar
				mauris vitae nisl luctus finibus. Etiam a vehicula sapien. Cras
				malesuada fermentum aliquam. Nam vestibulum justo eget posuere
				tempor.
			</p>
			<span className="flex gap-2">
				<Badge variant="default">S7-1500</Badge>
				<Badge variant="default">S7-300</Badge>
			</span>
		</div>
	);
};

export default page;
