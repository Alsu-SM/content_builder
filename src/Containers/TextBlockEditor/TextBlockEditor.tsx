import clsx from 'clsx';
import { TextBlockEditorProps } from './types';

import styles from './TextBlockEditor.module.css';
import { observer } from 'mobx-react-lite';
import TextEditorUI from '../../Components/TextEditorUI';
import { TextEditor } from '../../Model';
import InnerHTMLPreview from '../../Components/InnerHTMLPreview';
import IconButton from '../../Components/IconButton';
import { Cancel, Delete, Edit, Save } from '../../Components/Icons';

const TextBlockEditor = observer(
	({
		textBlock,
		onFocus,
		onDelete,
		className,
		style,
	}: TextBlockEditorProps) => {
		const textEditor = new TextEditor(textBlock.content);

		return (
			<div
				className={clsx(
					styles.root,
					{
						[styles.edit_mode]: textBlock.isEditMode,
					},
					className,
				)}
				style={style}
				key={textBlock.id}
				onFocus={() => onFocus()}
				tabIndex={-1}
			>
				{textBlock.isEditMode && <TextEditorUI textEditor={textEditor} />}
				{!textBlock.isEditMode && (
					<InnerHTMLPreview
						className={styles.preview}
						innerHTML={textBlock.content}
					/>
				)}
				{textBlock.isEditMode && (
					<div
						className={clsx(
							styles.buttons_row_absolute,
							styles.buttons_row_absolute_edit,
						)}
					>
						<IconButton
							className={styles.icon_button}
							onClick={() => textBlock.cancelEdit()}
						>
							<Cancel className={styles.icon} />
						</IconButton>
						<IconButton
							className={styles.icon_button}
							onClick={() => textBlock.saveAndStopEdit(textEditor.editorValue)}
						>
							<Save className={styles.icon} />
						</IconButton>
					</div>
				)}
				{!textBlock.isEditMode && (
					<div className={styles.buttons_row_absolute}>
						<IconButton className={styles.icon_button} onClick={onDelete}>
							<Delete className={styles.icon} />
						</IconButton>
						<IconButton
							className={styles.icon_button}
							onClick={() => textBlock.startEdit()}
						>
							<Edit className={styles.icon} />
						</IconButton>
					</div>
				)}
			</div>
		);
	},
);

export default TextBlockEditor;
