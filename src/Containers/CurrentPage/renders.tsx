import { PageElementType } from '../../Model';
import CoverBlockEditor from '../CoverBlockEditor';
import ImageBlockEditor from '../ImageBlockEditor';
import TextBlockEditor from '../TextBlockEditor';
import { RenderElementEditParams } from './types';

export function renderElementEdit({
	page,
	element,
	isActive,
	onFocus,
	onDelete,
}: RenderElementEditParams) {
	switch (element.type) {
		case PageElementType.TextBlock:
			return (
				<TextBlockEditor
					textBlock={element.data}
					isActive={isActive}
					onDelete={onDelete}
					onFocus={onFocus}
				/>
			);
		case PageElementType.Cover:
			return <CoverBlockEditor coverBlock={element.data} page={page} />;
		case PageElementType.ImageBlock:
			return <ImageBlockEditor imageBlock={element.data} />;
		default:
			return <></>;
	}
}
