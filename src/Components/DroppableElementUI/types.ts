import React, { ReactNode } from 'react';
import { DroppableElement } from '../../Model';
import { DropSource } from '../../Shared/types';

export interface DroppableElementUIProps {
	droppableElement: DroppableElement;
	onDrop: (data: DropSource) => void;
	children?: ReactNode;
	className?: string;
	style?: React.CSSProperties;
}
