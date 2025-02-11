import { observer } from 'mobx-react-lite';
import styles from './TextEditorUI.module.css';
import { TextEditorUIPartialProps } from './types';
import IconButton from '../IconButton';
import {
	AlignCenter,
	AlignJustify,
	AlignLeft,
	AlignRight,
	Bold,
	Italic,
	Link,
	OrderedList,
	Redo,
	RemoveCircle,
	Strikethrough,
	Underline,
	Undo,
	Unlink,
	UnorderedList,
} from '../Icons';
import SelectUI from '../SelectUI';
import { Select } from '../../Model';
import ColorPicker from '../ColorPicker';
import InputCounter from '../InputCounter';
import { useEffect } from 'react';

const TextEditorUISettings = observer(
	({ textEditor, ref }: TextEditorUIPartialProps) => {
		const selectFonts = new Select({ options: textEditor.fonts });

		useEffect(() => {
			textEditor.getFonts();
		}, []);

		return (
			<div className={styles.settings} id={textEditor.id}>
				<div className={styles.background_pattern} />
				<IconButton onClick={textEditor.undo} className={styles.icon_button}>
					<Undo className={styles.icon} />
				</IconButton>
				<IconButton onClick={textEditor.redo} className={styles.icon_button}>
					<Redo className={styles.icon} />
				</IconButton>
				<IconButton onClick={textEditor.bold} className={styles.icon_button}>
					<Bold className={styles.icon} />
				</IconButton>
				<IconButton
					onClick={textEditor.underline}
					className={styles.icon_button}
				>
					<Underline className={styles.icon} />
				</IconButton>
				<IconButton onClick={textEditor.italic} className={styles.icon_button}>
					<Italic className={styles.icon} />
				</IconButton>
				<IconButton
					onClick={textEditor.strikeThrough}
					className={styles.icon_button}
				>
					<Strikethrough className={styles.icon} />
				</IconButton>
				<IconButton
					onClick={textEditor.alignLeft}
					className={styles.icon_button}
				>
					<AlignLeft className={styles.icon} />
				</IconButton>
				<IconButton
					onClick={textEditor.alignCenter}
					className={styles.icon_button}
				>
					<AlignCenter className={styles.icon} />
				</IconButton>
				<IconButton
					onClick={textEditor.alignRight}
					className={styles.icon_button}
				>
					<AlignRight className={styles.icon} />
				</IconButton>
				<IconButton
					onClick={textEditor.alignJustify}
					className={styles.icon_button}
				>
					<AlignJustify className={styles.icon} />
				</IconButton>
				<IconButton
					onClick={textEditor.insertOrderedList}
					className={styles.icon_button}
				>
					<OrderedList className={styles.icon} />
				</IconButton>
				<IconButton
					onClick={textEditor.insertUnorderedList}
					className={styles.icon_button}
				>
					<UnorderedList className={styles.icon} />
				</IconButton>
				<IconButton
					onClick={textEditor.createLink}
					className={styles.icon_button}
				>
					<Link className={styles.icon} />
				</IconButton>
				<IconButton onClick={textEditor.unlink} className={styles.icon_button}>
					<Unlink className={styles.icon} />
				</IconButton>
				<IconButton
					onClick={textEditor.removeFormat}
					className={styles.icon_button}
				>
					<RemoveCircle className={styles.icon} />
				</IconButton>
				<div className={styles.separator} />
				<div className={styles.color_picker}>
					<div className={styles.color_picker_label}>Color</div>
					<ColorPicker
						color={textEditor.currentColor}
						onChange={(color) => textEditor.onColorChange(color)}
					/>
				</div>
				<div className={styles.color_picker}>
					<div className={styles.color_picker_label}>Highlight</div>
					<ColorPicker
						color={textEditor.currentHighLight}
						onChange={(color) => textEditor.onHighlightChange(color)}
					/>
				</div>
				<div className={styles.separator} />
				<InputCounter
					value={textEditor.currentFontSize}
					onChange={(size) => textEditor.formatSize(size)}
					className={styles.counter}
				/>
				<SelectUI
					select={selectFonts}
					placeholder="Font"
					isSearchDisabled
					onChange={(option) => {
						ref?.current?.focus();
						textEditor.selectFont(option);
					}}
				/>
			</div>
		);
	},
);

export default TextEditorUISettings;
