import { useEffect, useRef } from 'react';
import { TextEditor } from '../../Model';
import { reaction } from 'mobx';

function useTextEditorUI(
	textEditor: TextEditor,
	onChange: (data: string) => void,
) {
	const ref = useRef<HTMLDivElement>(null);

	reaction(
		() => textEditor.content,
		(content) => {
			onChange(content);
		},
	);

	useEffect(() => {
		if (ref.current) {
			textEditor.setElement(ref.current);
		}
	}, [ref.current !== null]);

	return { ref };
}

export default useTextEditorUI;
