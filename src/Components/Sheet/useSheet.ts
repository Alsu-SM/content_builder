import { Position } from './Sheet.interface';
import { Resizable, ResizeType } from '../../Model';

function useSheet(position: Position, minWidth?: number) {
	const types: ResizeType[] =
		position === Position.Left
			? [ResizeType.HorizontalRight]
			: [ResizeType.HorizontalLeft];

	const resizable = new Resizable({
		types,
		maxWidth: Math.max(screen.availWidth / 2, 375),
		minWidth: minWidth || 400,
	});

	return { resizable };
}

export default useSheet;
