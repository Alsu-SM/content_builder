import { IconProps } from '../types';

function UnorderedList({ className, style }: IconProps) {
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
				d="M9 18H20M9 12H20M9 6H20M4 17.5H5V18.5H4V17.5ZM4 11.5H5V12.5H4V11.5ZM4 5.5V6.5H5V5.5H4Z"
				stroke="var(--icon-color)"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}

export default UnorderedList;
