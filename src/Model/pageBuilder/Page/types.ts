import { CoverBlock } from '../CoverBlock';
import { ImageBlock } from '../ImageBlock';
import { TextBlock } from '../TextBlock';

export enum PageElementType {
	Cover = 'cover',
	TextBlock = 'textBlock',
	ImageBlock = 'imageBlock',
}

export type TextPageElement = {
	type: PageElementType.TextBlock;
	data: TextBlock;
	order: number;
};

export type ImagePageElement = {
	type: PageElementType.ImageBlock;
	data: ImageBlock;
	order: number;
};
export type CoverPageElement = {
	type: PageElementType.Cover;
	data: CoverBlock;
	order: number;
};

export type ElementModel = TextBlock | ImageBlock | CoverBlock;
export type PageElement = TextPageElement | ImagePageElement | CoverPageElement;
