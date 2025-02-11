import { IconProps } from '../types';

function ListAdd({ className, style }: IconProps) {
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
				d="M51 57V33M9 33H39M9 21H39M9 45H27M39 45H63"
				stroke="var(--icon-color)"
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}

export default ListAdd;
