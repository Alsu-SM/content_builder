import clsx from 'clsx';
import { BlockLibraryProps } from './types';

import styles from './BlockLibrary.module.css';
import useBlockLibrary from './useBlockLibrary';
import Input from '../../Components/Input';
import { observer } from 'mobx-react-lite';

const BlockLibraryContainer = observer(
	({ page, blockLibrary, className, style }: BlockLibraryProps) => {
		const { items } = useBlockLibrary(page, blockLibrary);

		return (
			<div className={clsx(styles.root, className)} style={style}>
				<div className={styles.header}>
					<Input
						className={styles.input}
						placeholder="Search in block library..."
						value={blockLibrary.search}
						onChange={(e) => blockLibrary.onSearchChange(e)}
					/>
				</div>
				{items}
				{items.length === 0 && (
					<div className={styles.no_data}>No blocks found</div>
				)}
			</div>
		);
	},
);

export default BlockLibraryContainer;
