import React, { ReactNode } from 'react';
import { VerticalResize } from '../../Model';

export interface VerticalResizeUIProps {
	verticalResize: VerticalResize;
	children: Partial<[ReactNode, ReactNode]>;
	className?: string;
	style?: React.CSSProperties;
}
