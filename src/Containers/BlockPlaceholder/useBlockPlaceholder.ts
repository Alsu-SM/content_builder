import { Page } from '../../Model';
import { DropSource } from '../../Shared/types';

function useBlockPlaceholder(page: Page) {
	const handleDrop = ({ draggableData }: DropSource) => {
		page.addElement(draggableData.type);
	};

	return { handleDrop };
}

export default useBlockPlaceholder;
