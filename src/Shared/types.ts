import { PageElement, PageElementType } from '../Model';

export type DraggableData<T = PageElement> = {
	type: PageElementType;
	element?: T;
	initialOrder?: number;
};

export type DropSource = {
	draggableData: DraggableData;
};

export enum HorizontalAlign {
	Left = 'left',
	Center = 'center',
	Right = 'right',
}

export enum VerticalAlign {
	Top = 'top',
	Middle = 'middle',
	Bottom = 'bottom',
}
