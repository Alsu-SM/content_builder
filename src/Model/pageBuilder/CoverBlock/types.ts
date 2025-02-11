import { HorizontalAlign, VerticalAlign } from '../../../Shared/types';

export type CoverContent = {
	id: string;
	data: string;
};

export type ConstructorParams = {
	backgroundType?: BackgroundType;
	imageSrc?: string;
	color?: string;
	gradient?: string;
	height?: number;
	heightUnits?: HeightUnits;
	content?: CoverContent[];
	horizontalAlign?: HorizontalAlign;
	verticalAlign?: VerticalAlign;
	paddingPercent?: number;
	gap?: number;
	hasOverlay?: boolean;
};

export enum BackgroundType {
	Image = 'image',
	Color = 'color',
	Gradient = 'gradient',
	None = 'none',
}

export enum HeightUnits {
	Px = 'px',
	Dvh = 'dvh',
	Percent = '%',
}
