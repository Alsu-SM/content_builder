import { ReactNode } from 'react';
import { Select } from '../../Model';

export interface SelectOption {
	id: string;
	name: string;
	disabled?: boolean;
	renderFn?: (value?: renderFnValueProps) => ReactNode;
}

export type SelectType = 'contained' | 'behind' | 'outlined';

export interface SelectProps {
	select: Select;
	isSearchDisabled?: boolean;
	onChange: (value: SelectOption) => void;
	label?: string;
	key?: string;
	disabled?: boolean;
	placeholder?: string;
	type?: SelectType;
	className?: string;
	style?: React.CSSProperties;
	name?: string;
}

export interface renderFnValueProps extends Omit<SelectOption, 'renderFn'> {}
