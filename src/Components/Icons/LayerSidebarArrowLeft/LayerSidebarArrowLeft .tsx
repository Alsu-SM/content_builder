import { IconProps } from '../types';

function LayerSidebarArrowLeft({ className, style }: IconProps) {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			className={className}
			style={style}
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M3 2C2.44772 2 2 2.44772 2 3V17C2 17.5523 2.44771 18 3 18H6V2H3ZM3 0C1.34315 0 0 1.34315 0 3V17C0 18.6569 1.34315 20 3 20H17C18.6569 20 20 18.6569 20 17V3C20 1.34315 18.6569 0 17 0H3ZM8 2V18H17C17.5523 18 18 17.5523 18 17V3C18 2.44771 17.5523 2 17 2H8Z"
				fill="var(--icon-color)"
			></path>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M14.7071 6.29289C15.0976 6.68342 15.0976 7.31658 14.7071 7.70711L12.4142 10L14.7071 12.2929C15.0976 12.6834 15.0976 13.3166 14.7071 13.7071C14.3166 14.0976 13.6834 14.0976 13.2929 13.7071L10.2929 10.7071C9.90237 10.3166 9.90237 9.68342 10.2929 9.29289L13.2929 6.29289C13.6834 5.90237 14.3166 5.90237 14.7071 6.29289Z"
				fill="var(--icon-color)"
			></path>
		</svg>
	);
}

export default LayerSidebarArrowLeft;
