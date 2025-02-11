import React from 'react';

export interface ColorPickerProps {
	color: string;
	onChange: (color: string) => void;
	className?: string;
	style?: React.CSSProperties;
}
