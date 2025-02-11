import React, { ReactNode } from 'react';
import { type Edge } from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge';
import { itemKey } from './constants';

export type Item = {
	id: string;
	element: ReactNode;
};

export type ItemPosition = 'first' | 'last' | 'middle' | 'only';

export type ItemEntry = { itemId: string; element: HTMLElement };

export type DraggableState =
	| { type: 'idle' }
	| { type: 'preview'; container: HTMLElement }
	| { type: 'dragging' };

export type ListContextValue = {
	getListLength: () => number;
	registerItem: (entry: ItemEntry) => () => void;
	reorderItem: (args: {
		startIndex: number;
		indexOfTarget: number;
		closestEdgeOfTarget: Edge | null;
	}) => void;
	instanceId: symbol;
};

export interface OrderedListProps {
	items: Item[];
	onReorder: (items: Item[]) => void;
	className?: string;
	style?: React.CSSProperties;
}

export interface OrderedListItemProps {
	item: Item;
	index: number;
	position: ItemPosition;
}

export interface DropDownListContentProps {
	position: ItemPosition;
	index: number;
}

export type GetItemDataParams = {
	item: Item;
	index: number;
	instanceId: symbol;
};

export type ItemData = {
	[itemKey]: true;
	item: Item;
	index: number;
	instanceId: symbol;
};

export type ListState = {
	items: Item[];
	lastCardMoved: {
		item: Item;
		previousIndex: number;
		currentIndex: number;
		numberOfItems: number;
	} | null;
};
