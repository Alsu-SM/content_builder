import { IconProps } from '../types';

function Underline({ className, style }: IconProps) {
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
				d="M7 4V11C7 13.7614 9.23858 16 12 16C14.7614 16 17 13.7614 17 11V4M6 20H18"
				stroke="var(--icon-color)"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}

export default Underline;
