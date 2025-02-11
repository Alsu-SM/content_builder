import clsx from 'clsx';
import { InputProps } from './types';

import styles from './Input.module.css';

function Input({ className, style, ...props }: InputProps) {
	return (
		<input
			className={clsx(styles.root, styles.input, className)}
			style={style}
			{...props}
		/>
	);
}

export default Input;
