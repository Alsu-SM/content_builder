import clsx from 'clsx';
import { DroppableElementUIProps } from './types';

import styles from './DroppableElementUI.module.css';
import { observer } from 'mobx-react-lite';
import useDroppableElementUI from './useDroppableElementUI';

const DroppableElementUI = observer(
	({
		children,
		onDrop,
		droppableElement,
		className,
		style,
	}: DroppableElementUIProps) => {
		const { ref } = useDroppableElementUI(droppableElement, onDrop);

		return (
			<div
				className={clsx(
					styles.root,
					{ [styles.drag_over]: droppableElement.isDragOver },
					className,
				)}
				style={style}
				ref={ref}
			>
				{children}
			</div>
		);
	},
);

export default DroppableElementUI;
