import { IconProps } from '../types';

function Redo({ className, style }: IconProps) {
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
				d="M9.48999 20L8.67181 19.1429C5.02719 15.3247 7.73352 9 13.0119 9H17.99M17.99 9L13.99 13M17.99 9L13.99 5"
				stroke="var(--icon-color)"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}

export default Redo;
