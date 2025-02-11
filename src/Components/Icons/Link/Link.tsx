import { IconProps } from '../types';

function Link({ className, style }: IconProps) {
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
				d="M42 36C42 42.6274 36.6274 48 30 48H18C11.3726 48 6 42.6274 6 36C6 29.3726 11.3726 24 18 24H24M30 36C30 29.3726 35.3726 24 42 24H54C60.6274 24 66 29.3726 66 36C66 42.6274 60.6274 48 54 48H48"
				stroke="var(--icon-color)"
				stroke-width="6"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}

export default Link;
