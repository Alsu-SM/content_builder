import { IconProps } from '../types';

function AlignLeft({ className, style }: IconProps) {
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
				d="M4 4H20M4 12H20M4 20H20M4 8H14M4 16H14"
				stroke="var(--icon-color)"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}

export default AlignLeft;
