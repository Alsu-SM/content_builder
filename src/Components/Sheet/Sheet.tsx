import clsx from 'clsx';

import { Position, SheetProps } from './Sheet.interface';

import styles from './Sheet.module.css';
import ResizableUI from '../ResizableUI';
import useSheet from './useSheet';
import { useRef } from 'react';
import useOnClickOutside from '../../Shared/useOnClickOutside';
import ReactDOM from 'react-dom';

function Sheet({
	children,
	isShown,
	position = Position.Left,
	minWidth,
	onClose = () => {},
	className,
}: SheetProps) {
	const ref = useRef<HTMLDivElement>(null);

	const sheetClassName = clsx(styles.sheet, className, styles[position], {
		[styles.shown]: isShown,
	});
	const wrapperClassName = clsx(
		styles.wrapper,
		styles[`wrapper_${position}`],
		className,
		{
			[styles.wrapper_shown]: isShown,
		},
	);

	const { resizable } = useSheet(position, minWidth);
	const pageContainer = document.getElementById('root');

	useOnClickOutside(ref, onClose);

	return (
		pageContainer &&
		ReactDOM.createPortal(
			<ResizableUI resizable={resizable} className={wrapperClassName}>
				<div className={sheetClassName} ref={ref}>
					{children}
					<div className={styles.background_pattern} />
				</div>
			</ResizableUI>,
			pageContainer,
		)
	);
}

export default Sheet;
