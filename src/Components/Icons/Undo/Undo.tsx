import { IconProps } from '../types';

function Undo({ className, style }: IconProps) {
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
				d="M14.5 20L15.3182 19.1429C18.9628 15.3247 16.2565 9 10.9781 9H6M6 9L10 13M6 9L10 5"
				stroke="var(--icon-color)"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}

export default Undo;
