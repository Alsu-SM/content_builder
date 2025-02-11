import { IconProps } from '../types';

function Copy({ className, style }: IconProps) {
	return (
		<svg
			width="72"
			height="72"
			viewBox="0 0 72 72"
			fill="none"
			className={className}
			style={style}
		>
			<path
				id="Icon"
				d="M9 48V12C9 8.68629 11.6863 6 15 6H45M27 66H54C57.3137 66 60 63.3137 60 60V24C60 20.6863 57.3137 18 54 18H27C23.6863 18 21 20.6863 21 24V60C21 63.3137 23.6863 66 27 66Z"
				stroke="var(--icon-color)"
				stroke-width="5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}

export default Copy;
