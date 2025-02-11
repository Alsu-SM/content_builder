import React, { RefObject } from 'react';
import { TextEditor } from '../../Model';

export interface TextEditorUIProps {
	textEditor: TextEditor;
	onChange?: (content: string) => void;
	onSettingsOpen?: () => void;
	onSettingsClose?: () => void;
	onDelete?: () => void;
	onCopy?: () => void;
	className?: string;
	style?: React.CSSProperties;
}

export interface TextEditorUIPartialProps {
	textEditor: TextEditor;
	ref?: RefObject<HTMLDivElement>;
}
