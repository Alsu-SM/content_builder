import React, { ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
	disabled?: boolean;
	primary?: boolean;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	className?: string;
	style?: React.CSSProperties;
}
