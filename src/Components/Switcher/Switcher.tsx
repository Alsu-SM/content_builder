import clsx from 'clsx';
import { SwitcherProps } from './types';

import styles from './Switcher.module.css';
import Button from '../Button';
import { useEffect } from 'react';

const Switcher = ({
	items,
	value = '',
	onChange,
	className,
	style,
}: SwitcherProps) => {
	const switcherItems = items.map((item) => (
		<Button
			className={clsx(styles.item, {
				[styles.item__selected]: item.id === value,
			})}
			primary={item.id === value}
			onClick={() => onChange(item.id)}
			key={item.id}
		>
			{item.name}
		</Button>
	));

	useEffect(() => {
		console.log(value, items);
	}, [value]);

	return (
		<div className={clsx(styles.root, className)} style={style}>
			{switcherItems}
		</div>
	);
};
export default Switcher;
