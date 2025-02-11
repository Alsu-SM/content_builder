import { ReactNode } from 'react';
import { DoubleVerticalResize } from '../../Model';

export interface DoubleVerticalResizeUIProps {
	doubleVerticalResize: DoubleVerticalResize;
	children: [ReactNode, ReactNode, ReactNode];
}
