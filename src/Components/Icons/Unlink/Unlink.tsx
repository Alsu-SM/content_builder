import { IconProps } from '../types';

function Unlink({ className, style }: IconProps) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			className={className}
			style={style}
		>
			<path
				d="M14 12C14 14.2091 12.2091 16 10 16H6C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8H8M10 12C10 9.79086 11.7909 8 14 8H18C20.2091 8 22 9.79086 22 12C22 14.2091 20.2091 16 18 16H16"
				stroke="var(--icon-color)"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M18 20L5 5"
				stroke="var(--icon-color)"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}

export default Unlink;
