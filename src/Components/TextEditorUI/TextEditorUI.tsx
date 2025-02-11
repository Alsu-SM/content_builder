import clsx from 'clsx';
import { TextEditorUIProps } from './types';

import styles from './TextEditorUI.module.css';
import { observer } from 'mobx-react-lite';
import useTextEditorUI from './useTextEditorUI';
import TextEditorUISettings from './TextEditorUISettings';
import useOnClickOutside from '../../Shared/useOnClickOutside';
import IconButton from '../IconButton';
import { Copy, Delete } from '../Icons';

const TextEditorUI = observer(
	({
		textEditor,
		onChange = () => {},
		onSettingsOpen = () => {},
		onSettingsClose = () => {},
		onDelete = () => {},
		onCopy = () => {},
		className,
		style,
	}: TextEditorUIProps) => {
		const { ref } = useTextEditorUI(textEditor, onChange);
		useOnClickOutside(ref, () => {
			textEditor.onClickOutside();
		});

		return (
			<div
				className={clsx(styles.root, className)}
				style={style}
				onFocus={() => {
					textEditor.onFocus();
					onSettingsOpen();
				}}
				onBlur={() => {
					textEditor.onBlur();
					onSettingsClose();
				}}
			>
				{textEditor.isActive && (
					<TextEditorUISettings textEditor={textEditor} ref={ref} />
				)}

				<div
					className={styles.content}
					ref={ref}
					contentEditable
					spellCheck={false}
					onMouseUp={(e) => textEditor.onMouseKeyUp(e)}
					onKeyUp={(e) => textEditor.onMouseKeyUp(e)}
					onMouseEnter={() => textEditor.onMouseEnter()}
				></div>
				<div className={styles.buttons}>
					<IconButton className={styles.content_icon_button} onClick={onDelete}>
						<Delete className={styles.content_icon} />
					</IconButton>
					<IconButton className={styles.content_icon_button} onClick={onCopy}>
						<Copy className={styles.content_icon} />
					</IconButton>
				</div>
			</div>
		);
	},
);

export default TextEditorUI;
