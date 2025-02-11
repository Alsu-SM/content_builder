import React from 'react';
import { CoverBlock, Page } from '../../Model';

export interface CoverBlockEditorProps {
	page: Page;
	coverBlock: CoverBlock;
	className?: string;
	style?: React.CSSProperties;
}

export interface CoverBlockSettingsProps {
	coverBlock: CoverBlock;
}
