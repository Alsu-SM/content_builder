import { DoubleVerticalResizeUIProps } from './types';

import styles from './DoubleVerticalResizeUI.module.css';
import { observer } from 'mobx-react-lite';

const DoubleVerticalResizeUI = observer(
	({ doubleVerticalResize, children }: DoubleVerticalResizeUIProps) => {
		return (
			<div className={styles.root}>
				<div
					className={styles.content_wrapper}
					style={doubleVerticalResize.leftElementStyle}
				>
					{children[0]}
				</div>
				<div
					id="resizeLeft"
					className={styles.resizer}
					draggable
					onDrag={(e) => doubleVerticalResize.handleDrag(e)}
					onDragStart={doubleVerticalResize.handleDragStart}
				/>

				<div className={styles.content_wrapper_centered}>{children[1]}</div>

				<div
					id="resizeRight"
					className={styles.resizer}
					draggable
					onDrag={(e) => doubleVerticalResize.handleDrag(e)}
					onDragStart={doubleVerticalResize.handleDragStart}
				/>
				<div
					className={styles.content_wrapper}
					style={doubleVerticalResize.rightElementStyle}
				>
					{children[2]}
				</div>
			</div>
		);
	},
);

export default DoubleVerticalResizeUI;
