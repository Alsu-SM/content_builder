import React, { ReactNode } from 'react';
import { Resizable } from '../../Model';

export interface ResizableUIProps {
	resizable: Resizable;
	children: ReactNode;
	className?: string;
	style?: React.CSSProperties;
}
