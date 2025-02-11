import clsx from 'clsx';
import { BlockPlaceholderProps } from './types';

import styles from './BlockPlaceholder.module.css';
import { DroppableElement } from '../../Model';
import DroppableElementUI from '../../Components/DroppableElementUI';
import { observer } from 'mobx-react-lite';
import useBlockPlaceholder from './useBlockPlaceholder';

const BlockPlaceholder = observer(
	({ page, className, style }: BlockPlaceholderProps) => {
		const droppableElement = new DroppableElement();
		const { handleDrop } = useBlockPlaceholder(page);

		return (
			<DroppableElementUI
				className={clsx(styles.root, className)}
				style={style}
				droppableElement={droppableElement}
				onDrop={handleDrop}
			>
				<div className={styles.content}>Drop new block here ~</div>
			</DroppableElementUI>
		);
	},
);

export default BlockPlaceholder;
