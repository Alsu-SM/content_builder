import { IconProps } from '../types';

function OrderedList({ className, style }: IconProps) {
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
				d="M12 18H21M4 14L4.94036 13.5298C5.57317 13.2134 6.33744 13.3374 6.83772 13.8377V13.8377C7.47963 14.4796 7.47963 15.5204 6.83772 16.1623L4 19H8M4.5 4.5H6V9.5M6 9.5H8M6 9.5H4M12 6H21M12 12H21"
				stroke="var(--icon-color)"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}

export default OrderedList;
