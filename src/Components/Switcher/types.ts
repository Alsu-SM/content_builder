import React from 'react';

export interface SwitcherProps {
	items: SwitcherItem[];
	value?: string;
	onChange: (value: string) => void;
	className?: string;
	style?: React.CSSProperties;
}

export type SwitcherItem = {
	id: string;
	name: string;
};
