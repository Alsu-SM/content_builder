import clsx from 'clsx';
import { IconButtonProps } from './types';

import styles from './IconButton.module.css';
import Button from '../Button';

function IconButton(props: IconButtonProps) {
	return (
		<Button
			{...props}
			onPointerDown={(e) => {
				e.preventDefault();
			}}
			className={clsx(props.className, styles.root, styles.button)}
		/>
	);
}

export default IconButton;
