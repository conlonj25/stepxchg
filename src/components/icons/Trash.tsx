import { cn } from '@/lib/utils';
import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

const Trash = React.forwardRef<SVGSVGElement, IconProps>(
	({ className, ...props }, ref) => (
		<svg
			ref={ref}
			{...props}
			className={cn('', className)}
			width="24"
			height="25"
			viewBox="0 0 24 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill="currentColor"
				d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
			/>
		</svg>
	)
);

Trash.displayName = 'Trash';
export default Trash;
