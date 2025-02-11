import React, { ReactNode } from 'react';
import { DraggableElement } from '../../Model';
import { DraggableData } from '../../Shared/types';

export interface DraggableElementUIProps {
	draggableElement: DraggableElement;
	data: DraggableData;
	children: ReactNode;
	className?: string;
	style?: React.CSSProperties;
}
