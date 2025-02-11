import clsx from 'clsx';
import { InnerHTMLPreviewProps } from './types';

import styles from './InnerHTMLPreview.module.css';
import useInnerHTMLPreview from './useInnerHTMLPreview';

function InnerHTMLPreview({
	innerHTML,
	className,
	style,
}: InnerHTMLPreviewProps) {
	const { ref } = useInnerHTMLPreview(innerHTML);

	return (
		<div
			className={clsx(styles.root, className)}
			style={style}
			ref={ref}
			tabIndex={-1}
		/>
	);
}

export default InnerHTMLPreview;
