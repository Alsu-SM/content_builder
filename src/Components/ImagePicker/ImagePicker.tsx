import clsx from 'clsx';
import { ImagePickerProps } from './types';

import styles from './ImagePicker.module.css';
import useImagePicker from './useImagePicker';
import IconButton from '../IconButton';
import { Delete } from '../Icons';

function ImagePicker({ src, onChange, className, style }: ImagePickerProps) {
	const { ref, handleChange, handleDelete } = useImagePicker(onChange);

	return (
		<div className={clsx(styles.image_wrapper, className)} style={style}>
			{!!src ? (
				<img src={src} className={styles.image} />
			) : (
				<div className={styles.image_placeholder}></div>
			)}
			<input
				type="file"
				className={styles.input}
				accept=".jpg, .jpeg, .png, .gif"
				ref={ref}
				onChange={handleChange}
			/>
			<IconButton className={styles.delete_button} onClick={handleDelete}>
				<Delete className={styles.delete_button_icon} />
			</IconButton>
		</div>
	);
}

export default ImagePicker;
