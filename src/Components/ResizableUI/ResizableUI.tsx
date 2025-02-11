import clsx from 'clsx';
import { ResizableUIProps } from './types';

import styles from './ResizableUI.module.css';
import { observer } from 'mobx-react-lite';

const ResizableUI = observer(
	({ resizable, children, className, style }: ResizableUIProps) => {
		const renderResizer = () =>
			resizable.types.map((type) => (
				<div
					key={type}
					id={type}
					className={clsx(styles.resizer, styles[`resizer_${type}`])}
					draggable
					onDrag={(e) => resizable.handleDrag(e)}
					onDragStart={resizable.handleDragStart}
					onMouseDown={(e) => {
						e.stopPropagation();
						// e.preventDefault();
					}}
				/>
			));
		return (
			<div className={clsx(styles.root, className)} style={style}>
				<div className={styles.content_wrapper} style={resizable.sizeStyle}>
					{children}
				</div>
				{renderResizer()}
			</div>
		);
	},
);

export default ResizableUI;
