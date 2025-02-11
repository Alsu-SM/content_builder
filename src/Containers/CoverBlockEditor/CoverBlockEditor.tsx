import clsx from 'clsx';
import { CoverBlockEditorProps } from './types';

import styles from './CoverBlockEditor.module.css';
import { observer } from 'mobx-react-lite';
import { TextEditor } from '../../Model';
import TextEditorUI from '../../Components/TextEditorUI';
import IconButton from '../../Components/IconButton';
import { ListAdd } from '../../Components/Icons';
import Button from '../../Components/Button';
import Sheet from '../../Components/Sheet';
import CoverBlockSettings from './CoverBlockSettings';
import { Position } from '../../Components/Sheet/Sheet.interface';
import OrderedList from '../../Components/OrderedList';
import { BackgroundType } from '../../Model/pageBuilder/CoverBlock/types';

const CoverBlockEditor = observer(
	({ page, coverBlock, className, style }: CoverBlockEditorProps) => {
		const elements = coverBlock.content.map((item) => {
			const textEditor = new TextEditor(item.data);

			return {
				id: item.id,
				element: (
					<TextEditorUI
						textEditor={textEditor}
						key={item.id}
						className={styles.content_item}
						onChange={(content: string) =>
							coverBlock.editContent({ ...item, data: content })
						}
						onSettingsOpen={() => page.hideTopBar()}
						onSettingsClose={() => page.showTopBar()}
						onDelete={() => coverBlock.deleteContent(item.id)}
						onCopy={() => coverBlock.copyContent(item)}
					/>
				),
			};
		});

		return (
			<div
				className={clsx(styles.root, className)}
				style={{
					...style,
					...coverBlock.wrapperStyle,
					height: `calc(${coverBlock.wrapperStyle.height} - var(--page-edit-top-bar-height))`,
				}}
			>
				{coverBlock.imageSrc &&
					coverBlock.backgroundType === BackgroundType.Image && (
						<img src={coverBlock.imageSrc} className={styles.image} />
					)}

				<OrderedList
					items={elements}
					onReorder={(items) => {
						const ids = items.map(({ id }) => id);
						if (coverBlock) {
							coverBlock.setContentOrder(ids);
						}
					}}
					className={styles.content_wrapper}
					style={coverBlock.itemsWrapperStyle}
				/>
				<IconButton
					className={styles.add_text_button}
					onClick={() => coverBlock.addContent()}
				>
					<ListAdd className={styles.add_text_button_icon} />
				</IconButton>
				<div className={styles.image_edit_button_wrapper}>
					<Button
						className={styles.image_edit_button}
						onClick={() => coverBlock.openSettings()}
					>
						Edit cover
					</Button>
				</div>
				<Sheet
					isShown={coverBlock.isCoverSettingsShown}
					position={Position.Right}
					className={styles.settings_sheet}
					onClose={() => coverBlock.closeSettings()}
					minWidth={600}
				>
					<CoverBlockSettings coverBlock={coverBlock} />
				</Sheet>
			</div>
		);
	},
);

export default CoverBlockEditor;
