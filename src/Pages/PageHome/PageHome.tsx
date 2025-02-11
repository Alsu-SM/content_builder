import clsx from 'clsx';

import styles from './PageHome.module.css';
import { Page } from '../../Model';
import PageEditor from '../../Containers/PageEditor';

function PageHome() {
	const page = new Page();
	console.log(page);

	return (
		<div className={clsx('page', styles.root)}>
			<PageEditor page={page} />
		</div>
	);
}

export default PageHome;
