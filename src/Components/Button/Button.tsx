import clsx from 'clsx';
import { ButtonProps } from './types';

import styles from './Button.module.css';

function Button({
	children,
	primary,
	disabled,
	onClick,
	className,
	style,
	...props
}: ButtonProps) {
	return (
		<button
			className={clsx(styles.root, { [styles.primary]: primary }, className)}
			style={style}
			disabled={disabled}
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	);
}

export default Button;
