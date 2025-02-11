import { Page } from '../../Model';
import { renderElementEdit } from './renders';

function useCurrentSite(page: Page) {
	const elements = page.elements.map((element) => {
		const onDelete = () => {
			page.deleteElement(element.data.id);
		};
		const onFocus = () => {
			page.focusElement(element);
		};

		const isActive = page.activeElementId === element.data.id;
		return renderElementEdit({ page, element, isActive, onDelete, onFocus });
	});

	return { page, elements };
}

export default useCurrentSite;
