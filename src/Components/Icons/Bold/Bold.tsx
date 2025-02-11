import { IconProps } from '../types';

function Bold({ className, style }: IconProps) {
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
				d="M24 19.5V54H39C43.9706 54 48 49.9706 48 45V45C48 40.0294 43.9706 36 39 36H24H36.75C41.3063 36 45 32.3063 45 27.75V27.75C45 23.1937 41.3063 19.5 36.75 19.5H24Z"
				stroke="var(--icon-color)"
				stroke-width="8"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}

export default Bold;
