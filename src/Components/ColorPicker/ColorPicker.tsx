import clsx from 'clsx';
import { ColorPickerProps } from './types';

import styles from './ColorPicker.module.css';
import { useEffect, useRef, useState } from 'react';
import { Colorful, ColorResult, Compact, Slider } from '@uiw/react-color';
import { colorSwatch } from './constants';
import useOnClickOutside from '../../Shared/useOnClickOutside';

function ColorPicker({ color, onChange, className, style }: ColorPickerProps) {
	const [isPickerShown, setIsPickerShown] = useState<boolean>(false);
	const [currentColor, setCurrentColor] = useState<string>(color || '#fff');

	const ref = useRef<HTMLDivElement>(null);
	const handleOpen = () => {
		setIsPickerShown(true);
	};

	const handleClose = () => {
		setIsPickerShown(false);
	};

	const handleChange = (color: ColorResult) => {
		setCurrentColor(color.hexa);
		onChange(color.hexa);
	};

	useOnClickOutside(ref, handleClose);

	useEffect(() => {
		setCurrentColor(color);
	}, [color]);

	return (
		<div className={clsx(styles.root, className)} style={style} ref={ref}>
			<button
				style={{ background: currentColor }}
				onClick={handleOpen}
				className={styles.button}
				onPointerDown={(e) => {
					e.preventDefault();
				}}
			/>
			{isPickerShown && (
				<div className={styles.picker}>
					<Colorful
						color={currentColor}
						onChange={handleChange}
						className={styles.colorful}
					/>
					<div className={styles.group}>
						<Compact
							color={currentColor}
							colors={colorSwatch}
							onChange={handleChange}
							className={styles.swatch}
							onPointerDown={(e) => {
								e.preventDefault();
							}}
						/>
						<Slider
							color={currentColor}
							onChange={handleChange}
							className={styles.slider}
							onPointerDown={(e) => {
								e.preventDefault();
							}}
						/>
					</div>
				</div>
			)}
		</div>
	);
}

export default ColorPicker;
