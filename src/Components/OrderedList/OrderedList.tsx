import { ListContextValue, ListState, OrderedListProps } from './types';
import { getReorderDestinationIndex } from '@atlaskit/pragmatic-drag-and-drop-hitbox/util/get-reorder-destination-index';
import { reorder } from '@atlaskit/pragmatic-drag-and-drop/reorder';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { getItemPosition, getItemRegistry, isItemData } from './utils';
import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import {
	type Edge,
	extractClosestEdge,
} from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge';
import { ListContext } from './OrderedListContext';
import OrderedListItem from './OrderedListItem';
import styles from './OrderedList.module.css';
import clsx from 'clsx';

function OrderedList({
	items: propsItems,
	onReorder,
	className,
	style,
}: OrderedListProps) {
	const [{ items, lastCardMoved }, setListState] = useState<ListState>({
		items: propsItems,
		lastCardMoved: null,
	});
	const [registry] = useState(getItemRegistry);

	// Isolated instances of this component from one another
	const [instanceId] = useState(() => Symbol('instance-id'));

	const reorderItem = useCallback(
		({
			startIndex,
			indexOfTarget,
			closestEdgeOfTarget,
		}: {
			startIndex: number;
			indexOfTarget: number;
			closestEdgeOfTarget: Edge | null;
		}) => {
			const finishIndex = getReorderDestinationIndex({
				startIndex,
				closestEdgeOfTarget,
				indexOfTarget,
				axis: 'vertical',
			});

			if (finishIndex === startIndex) {
				// If there would be no change, we skip the update
				return;
			}

			setListState((listState) => {
				const item = listState.items[startIndex];

				return {
					items: reorder({
						list: listState.items,
						startIndex,
						finishIndex,
					}),
					lastCardMoved: {
						item,
						previousIndex: startIndex,
						currentIndex: finishIndex,
						numberOfItems: listState.items.length,
					},
				};
			});
		},
		[],
	);

	useEffect(() => {
		setListState({
			items: propsItems,
			lastCardMoved: null,
		});
	}, [propsItems]);

	useEffect(() => {
		return monitorForElements({
			canMonitor({ source }) {
				return isItemData(source.data) && source.data.instanceId === instanceId;
			},
			onDrop({ location, source }) {
				const target = location.current.dropTargets[0];
				if (!target) {
					return;
				}

				const sourceData = source.data;
				const targetData = target.data;
				if (!isItemData(sourceData) || !isItemData(targetData)) {
					return;
				}

				const indexOfTarget = items.findIndex(
					(item) => item.id === targetData.item.id,
				);
				if (indexOfTarget < 0) {
					return;
				}

				const closestEdgeOfTarget = extractClosestEdge(targetData);

				reorderItem({
					startIndex: sourceData.index,
					indexOfTarget,
					closestEdgeOfTarget,
				});
			},
		});
	}, [instanceId, items, reorderItem]);

	// once a drag is finished, we have some post drop actions to take
	useEffect(() => {
		if (lastCardMoved === null) {
			return;
		}

		onReorder(items);
	}, [lastCardMoved, registry]);

	const getListLength = useCallback(() => items.length, [items.length]);

	const contextValue: ListContextValue = useMemo(() => {
		return {
			registerItem: registry.register,
			reorderItem,
			instanceId,
			getListLength,
		};
	}, [registry.register, reorderItem, instanceId, getListLength]);

	return (
		<ListContext.Provider value={contextValue}>
			<div className={clsx(styles.root, className)} style={style}>
				{items.map((item, index) => (
					<OrderedListItem
						key={item.id}
						item={item}
						index={index}
						position={getItemPosition({ index, items })}
					/>
				))}
			</div>
		</ListContext.Provider>
	);
}

export default OrderedList;
