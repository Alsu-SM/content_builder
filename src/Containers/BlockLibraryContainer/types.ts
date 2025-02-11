import React from 'react';
import { BlockLibrary, Page, PageElementOption } from '../../Model';

export interface BlockLibraryProps {
	page: Page;
	blockLibrary: BlockLibrary;
	className?: string;
	style?: React.CSSProperties;
}

export type RenderBlockItemParams = {
	element: PageElementOption;
	onClick: () => void;
};
