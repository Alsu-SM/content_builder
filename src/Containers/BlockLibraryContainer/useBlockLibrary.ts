import { BlockLibrary, Page } from '../../Model';
import { renderBlockItem } from './renders';

function useBlockLibrary(page: Page, blockLibrary: BlockLibrary) {
	const items = blockLibrary.filteredElements.map((element) => {
		const onClick = () => {
			page.addElement(element.id);
		};

		return renderBlockItem({ element, onClick });
	});

	return { items };
}

export default useBlockLibrary;
