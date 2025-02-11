import clsx from 'clsx';
import { CurrentPageProps } from './types';

import styles from './CurrentPage.module.css';
import useCurrentSite from './useCurrentSite';
import { observer } from 'mobx-react-lite';

const CurrentPage = observer(({ page, className, style }: CurrentPageProps) => {
	const { elements } = useCurrentSite(page);

	return (
		<div className={clsx(styles.root, className)} style={style}>
			{elements.length > 0 && <div className={styles.content}>{elements}</div>}
			{elements.length === 0 && (
				<div className={styles.no_data_block}>
					<div className={styles.no_data}>Nothing here yet</div>
					<button
						className={styles.no_data_button}
						onClick={() => {
							page.showSettings();
						}}
					>
						Add first block
					</button>
				</div>
			)}
		</div>
	);
});

export default CurrentPage;
