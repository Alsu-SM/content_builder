import clsx from 'clsx';
import { PageEditorProps } from './types';

import styles from './PageEditor.module.css';
import { observer } from 'mobx-react-lite';
import BlockLibraryContainer from '../BlockLibraryContainer';
import Sheet from '../../Components/Sheet';
import CurrentPage from '../CurrentPage';
import { LayerSidebarArrowLeft } from '../../Components/Icons';
import IconButton from '../../Components/IconButton';
import { BlockLibrary } from '../../Model';

const PageEditor = observer(({ page, className, style }: PageEditorProps) => {
	const blockLibrary = new BlockLibrary();
	return (
		<div className={clsx(styles.root, className)} style={style}>
			{page.isTopBarShown && (
				<div className={styles.top_bar}>
					<IconButton
						className={clsx(styles.sidebar_button, {
							[styles.sidebar_button_open]: page.areSettingsShown,
						})}
						onClick={() => page.toggleSettings()}
					>
						<LayerSidebarArrowLeft className={styles.icon} />
					</IconButton>
					<div className={styles.background_pattern} />
				</div>
			)}
			<div className={styles.content}>
				<Sheet
					isShown={page.areSettingsShown}
					className={styles.sheet}
					onClose={() => page.hideSettings()}
				>
					<BlockLibraryContainer page={page} blockLibrary={blockLibrary} />
				</Sheet>
				<CurrentPage page={page} />
			</div>
		</div>
	);
});

export default PageEditor;
