import { cn } from '@/lib/utils';
import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

const Pencil = React.forwardRef<SVGSVGElement, IconProps>(
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
				d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75z"
			/>
		</svg>
	)
);

Pencil.displayName = 'Pencil';
export default Pencil;
