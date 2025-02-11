import { ReactNode } from 'react';

export type SheetProps = {
	isShown: boolean;
	children: ReactNode;
	minWidth?: number;
	onClose?: () => void;
	position?: Position;
	className?: string;
};

export enum Position {
	Left = 'left',
	Right = 'right',
}
