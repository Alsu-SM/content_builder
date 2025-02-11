import { xcss } from '@atlaskit/primitives';
import { DraggableState } from './types';
import { token } from '@atlaskit/tokens';

export const idleState: DraggableState = { type: 'idle' };
export const draggingState: DraggableState = { type: 'dragging' };
export const itemKey = Symbol('item');

export const listItemPreviewStyles = xcss({
	paddingBlock: 'space.050',
	paddingInline: 'space.100',
	borderRadius: 'border.radius.100',
	backgroundColor: 'elevation.surface.overlay',
});

export const itemLabelStyles = xcss({
	flexGrow: 1,
	whiteSpace: 'nowrap',
	textOverflow: 'ellipsis',
	overflow: 'hidden',
});

export const listItemContainerStyles = xcss({
	position: 'relative',
	backgroundColor: 'elevation.surface',
	borderWidth: 'border.width.0',
	borderBottomWidth: token('border.width', '1px'),
	borderStyle: 'solid',
	borderColor: 'color.border',
	// eslint-disable-next-line @atlaskit/ui-styling-standard/no-unsafe-selectors -- Ignored via go/DSP-18766
	':last-of-type': {
		borderWidth: 'border.width.0',
	},
});

export const listItemStyles = xcss({
	position: 'relative',
});

export const listItemDisabledStyles = xcss({ opacity: 0.4 });

export const containerStyles = xcss({
	borderWidth: 'border.width',
	borderStyle: 'solid',
	borderColor: 'color.border',
});
