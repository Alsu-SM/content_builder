import clsx from 'clsx';
import { DraggableElementUIProps } from './types';

import styles from './DraggableElementUI.module.css';
import useDraggableElementUI from './useDraggableElementUI';
import { observer } from 'mobx-react-lite';

const DraggableElementUI = observer(
	({
		draggableElement,
		data,
		children,
		className,
	}: DraggableElementUIProps) => {
		const { ref } = useDraggableElementUI(draggableElement, data);

		return (
			<div
				className={clsx(
					styles.root,
					{ [styles.drag_active]: draggableElement.isDragActive },
					className,
				)}
				ref={ref}
			>
				<div className={styles.content}>{children}</div>
			</div>
		);
	},
);

export default DraggableElementUI;
