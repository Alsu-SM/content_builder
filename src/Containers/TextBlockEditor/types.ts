import React from 'react';
import { TextBlock } from '../../Model';

export interface TextBlockEditorProps {
	isActive: boolean;
	textBlock: TextBlock;
	onDelete: () => void;
	onFocus: () => void;
	className?: string;
	style?: React.CSSProperties;
}
