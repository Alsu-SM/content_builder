import { draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { useEffect, useRef } from 'react';
import { DraggableElement } from '../../Model';

function useDraggableElementUI<T>(draggableElement: DraggableElement, data: T) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (ref.current) {
			return draggable({
				element: ref.current,
				getInitialData: () => ({ draggableData: data }),
				onDragStart: () => draggableElement.onDragStart(),
				onDrop: () => draggableElement.onDragEnd(),
			});
		}
	}, [ref.current !== null]);

	return { ref };
}

export default useDraggableElementUI;
