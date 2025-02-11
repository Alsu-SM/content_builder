import { Fragment, useEffect, useRef, useState } from 'react';
import { DraggableState, ItemEntry, OrderedListItemProps } from './types';
import useOrderedListContext from './useOrderedListContext';
import {
	draggingState,
	idleState,
	listItemDisabledStyles,
	listItemStyles,
} from './constants';
import { getItemData, isItemData } from './utils';
import { combine } from '@atlaskit/pragmatic-drag-and-drop/combine';
import {
	draggable,
	dropTargetForElements,
} from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { setCustomNativeDragPreview } from '@atlaskit/pragmatic-drag-and-drop/element/set-custom-native-drag-preview';
import { pointerOutsideOfPreview } from '@atlaskit/pragmatic-drag-and-drop/element/pointer-outside-of-preview';
import { token } from '@atlaskit/tokens';
import {
	type Edge,
	attachClosestEdge,
	extractClosestEdge,
} from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge';
import { DragHandleButton } from '@atlaskit/pragmatic-drag-and-drop-react-accessibility/drag-handle-button';
import mergeRefs from '@atlaskit/ds-lib/merge-refs';
import { DropIndicator } from '@atlaskit/pragmatic-drag-and-drop-react-drop-indicator/box';
import ReactDOM from 'react-dom';
import styles from './OrderedList.module.css';

function OrderedListItem({ item, index, position }: OrderedListItemProps) {
	const {
		registerItem = (_entry: ItemEntry) => () => {},
		instanceId = Symbol(),
	} = useOrderedListContext() || {};

	const ref = useRef<HTMLDivElement>(null);
	const [closestEdge, setClosestEdge] = useState<Edge | null>(null);

	const dragHandleRef = useRef<HTMLButtonElement>(null);

	const [draggableState, setDraggableState] =
		useState<DraggableState>(idleState);

	useEffect(() => {
		const element = ref.current;
		const dragHandle = dragHandleRef.current;

		if (element && dragHandle) {
			const data = getItemData({ item, index, instanceId });

			return combine(
				registerItem({ itemId: item.id, element }),
				draggable({
					element: dragHandle,
					getInitialData: () => data,
					onGenerateDragPreview({ nativeSetDragImage }) {
						setCustomNativeDragPreview({
							nativeSetDragImage,
							getOffset: pointerOutsideOfPreview({
								x: token('space.200', '16px'),
								y: token('space.100', '8px'),
							}),
							render({ container }) {
								setDraggableState({ type: 'preview', container });

								return () => setDraggableState(draggingState);
							},
						});
					},
					onDragStart() {
						setDraggableState(draggingState);
					},
					onDrop() {
						setDraggableState(idleState);
					},
				}),
				dropTargetForElements({
					element,
					canDrop({ source }) {
						return (
							isItemData(source.data) && source.data.instanceId === instanceId
						);
					},
					getData({ input }) {
						return attachClosestEdge(data, {
							element,
							input,
							allowedEdges: ['top', 'bottom'],
						});
					},
					onDrag({ self, source }) {
						const isSource = source.element === element;
						if (isSource) {
							setClosestEdge(null);
							return;
						}

						const closestEdge = extractClosestEdge(self.data);

						const sourceIndex = source.data.index;

						if (typeof sourceIndex === 'number') {
							const isItemBeforeSource = index === sourceIndex - 1;
							const isItemAfterSource = index === sourceIndex + 1;

							const isDropIndicatorHidden =
								(isItemBeforeSource && closestEdge === 'bottom') ||
								(isItemAfterSource && closestEdge === 'top');

							if (isDropIndicatorHidden) {
								setClosestEdge(null);
								return;
							}

							setClosestEdge(closestEdge);
						}
					},
					onDragLeave() {
						setClosestEdge(null);
					},
					onDrop() {
						setClosestEdge(null);
					},
				}),
			);
		}
	}, [instanceId, item, index, registerItem]);

	return (
		<Fragment>
			<div ref={ref} className={styles.item_wrapper}>
				<div className={styles.item}>
					<div className={styles.drag_handle_wrapper}>
						<DragHandleButton
							ref={mergeRefs([dragHandleRef])}
							label={`Reorder ${item.element}`}
							className={styles.drag_handle}
						/>
					</div>
					<div className={styles.element}>{item.element}</div>
				</div>
				{closestEdge && <DropIndicator edge={closestEdge} gap="1px" />}
			</div>
			{draggableState.type === 'preview' &&
				ReactDOM.createPortal(
					<div>{item.element}</div>,
					draggableState.container,
				)}
		</Fragment>
	);
}

export default OrderedListItem;
