import React from 'react';
import { Page, PageElement } from '../../Model';

export interface CurrentPageProps {
	page: Page;
	className?: string;
	style?: React.CSSProperties;
}

export type RenderElementEditParams = {
	page: Page;
	element: PageElement;
	isActive: boolean;
	onDelete: () => void;
	onFocus: () => void;
};
