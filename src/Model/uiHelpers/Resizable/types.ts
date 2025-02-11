import { DragEvent } from 'react';

export enum ResizeType {
	HorizontalLeft = 'horizontalLeft',
	HorizontalRight = 'horizontalRight',
	VerticalTop = 'verticalTop',
	VerticalBottom = 'verticalBottom',
	TopRight = 'topRight',
	BottomRight = 'bottomRight',
	TopLeft = 'topLeft',
	BottomLeft = 'bottomLeft',
}

export type ConstructorParams = {
	types: ResizeType[];
	maxWidth?: number;
	maxHeight?: number;
	minWidth?: number;
	minHeight?: number;
};

export type GetSizeOnDragParams = {
	event: DragEvent<HTMLDivElement>;
	min?: number;
	max?: number;
};
