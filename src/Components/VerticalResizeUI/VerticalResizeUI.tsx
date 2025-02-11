import styles from './VerticalResizeUI.module.css';
import { observer } from 'mobx-react-lite';
import { VerticalResizeUIProps } from './types';

const VerticalResizeUI = observer(
	({ verticalResize, children }: VerticalResizeUIProps) => (
		<div className={styles.root}>
			<div style={verticalResize.leftElementStyle} className={styles.part}>
				{children[0]}
			</div>
			<div
				className={styles.resizer}
				draggable={true}
				onDrag={(e) => verticalResize.handleDrag(e)}
				onDragStart={verticalResize.handleDragStart}
			/>
			<div style={verticalResize.rightElementStyle} className={styles.part}>
				{children[1]}
			</div>
		</div>
	),
);

export default VerticalResizeUI;
