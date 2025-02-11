import React from 'react';

export interface ImagePickerProps {
	src: string;
	onChange: (src: string) => void;
	className?: string;
	style?: React.CSSProperties;
}
