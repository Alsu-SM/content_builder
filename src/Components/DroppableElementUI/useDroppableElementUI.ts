import { useEffect, useRef } from 'react';
import { dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { DroppableElement } from '../../Model';
import { DropSource } from '../../Shared/types';

function useDroppableElementUI(
	droppableElement: DroppableElement,
	onDrop: (data: DropSource) => void,
) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (ref.current) {
			return dropTargetForElements({
				element: ref.current,
				onDragEnter: () => {
					droppableElement.onDragEnter();
				},
				onDragLeave: () => droppableElement.onDragLeave(),
				onDrop: (data) => {
					droppableElement.onDragLeave();
					onDrop(data.source.data as DropSource);
				},
			});
		}
	}, [ref.current !== null]);

	return { ref };
}

export default useDroppableElementUI;
