import { PageElementType } from '../Page';
import { PageElementOption } from './types';
import cover from '../../../Assets/cover_1.png';

export const BLOCK_LIBRARY_ITEMS: PageElementOption[] = [
	{
		id: PageElementType.Cover,
		name: 'Cover',
		description: 'Large intro block width a title, subtitle and a background',
		previewSrc: cover,
	},
	{
		id: PageElementType.TextBlock,
		name: 'Text',
		description: 'Simple text block with formatting',
		previewSrc: '',
	},
];
