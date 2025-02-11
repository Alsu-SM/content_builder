import clsx from 'clsx';
import { ImageBlockEditorProps } from './types';

import styles from './ImageBlockEditor.module.css';
import { observer } from 'mobx-react-lite';

const ImageBlockEditor = observer(
	({ imageBlock, className, style }: ImageBlockEditorProps) => {
		return (
			<div
				className={clsx(styles.root, className)}
				style={style}
				id={imageBlock.id}
			>
				ImageEditor
			</div>
		);
	},
);

export default ImageBlockEditor;
