import React, { useCallback } from 'react';
import useOrderedListContext from './useOrderedListContext';
import { DropDownListContentProps } from './types';
import { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';

function DropDownListContent({ position, index }: DropDownListContentProps) {
	const { reorderItem = () => {}, getListLength = () => 1 } =
		useOrderedListContext() || {};

	const isMoveUpDisabled = position === 'first' || position === 'only';
	const isMoveDownDisabled = position === 'last' || position === 'only';

	const moveToTop = useCallback(() => {
		reorderItem({
			startIndex: index,
			indexOfTarget: 0,
			closestEdgeOfTarget: null,
		});
	}, [index, reorderItem]);

	const moveUp = useCallback(() => {
		reorderItem({
			startIndex: index,
			indexOfTarget: index - 1,
			closestEdgeOfTarget: null,
		});
	}, [index, reorderItem]);

	const moveDown = useCallback(() => {
		reorderItem({
			startIndex: index,
			indexOfTarget: index + 1,
			closestEdgeOfTarget: null,
		});
	}, [index, reorderItem]);

	const moveToBottom = useCallback(() => {
		reorderItem({
			startIndex: index,
			indexOfTarget: getListLength() - 1,
			closestEdgeOfTarget: null,
		});
	}, [index, getListLength, reorderItem]);

	return (
		<DropdownItemGroup>
			<DropdownItem onClick={moveToTop} isDisabled={isMoveUpDisabled}>
				Move to top
			</DropdownItem>
			<DropdownItem onClick={moveUp} isDisabled={isMoveUpDisabled}>
				Move up
			</DropdownItem>
			<DropdownItem onClick={moveDown} isDisabled={isMoveDownDisabled}>
				Move down
			</DropdownItem>
			<DropdownItem onClick={moveToBottom} isDisabled={isMoveDownDisabled}>
				Move to bottom
			</DropdownItem>
		</DropdownItemGroup>
	);
}

export default DropDownListContent;
