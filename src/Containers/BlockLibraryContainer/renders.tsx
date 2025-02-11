import { RenderBlockItemParams } from './types';
import styles from './BlockLibrary.module.css';

export function renderBlockItem({ element, onClick }: RenderBlockItemParams) {
	return (
		<div className={styles.element_wrapper}>
			<button className={styles.element} onClick={onClick} key={element.id}>
				{element.name}
			</button>
			<div className={styles.element_detail}>
				<img className={styles.element_preview} src={element.previewSrc} />
				<div className={styles.element_description}>{element.description}</div>
			</div>
		</div>
	);
}
