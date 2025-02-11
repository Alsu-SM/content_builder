import { GetSizeOnDragParams } from './types';

export const getWidthOnDragRight = ({
	event,
	max: maxWidth,
	min: minWidth,
}: GetSizeOnDragParams): number | null => {
	if (
		event.currentTarget.parentElement &&
		event.currentTarget.parentElement.parentElement &&
		event.clientX > 0
	) {
		const width =
			event.clientX -
			event.currentTarget.parentElement.getBoundingClientRect().left;

		const widthComputed = Math.min(
			Math.max(width, minWidth || 0),
			maxWidth || Infinity,
		);

		return widthComputed;
	}

	return null;
};

export const getWidthOnDragLeft = ({
	event,
	max: maxWidth,
	min: minWidth,
}: GetSizeOnDragParams): number | null => {
	if (
		event.currentTarget.parentElement &&
		event.currentTarget.parentElement.parentElement &&
		event.clientX > 0
	) {
		const width =
			event.currentTarget.parentElement.getBoundingClientRect().right -
			event.clientX;

		const widthComputed = Math.min(
			Math.max(width, minWidth || 0),
			maxWidth || Infinity,
		);

		return widthComputed;
	}

	return null;
};

export const getHeightOnDragTop = ({
	event,
	max: maxHeight,
	min: minHeight,
}: GetSizeOnDragParams): number | null => {
	if (
		event.currentTarget.parentElement &&
		event.currentTarget.parentElement.parentElement &&
		event.clientY > 0
	) {
		const height =
			event.currentTarget.parentElement.getBoundingClientRect().bottom -
			event.clientY;

		const heightComputed = Math.min(
			Math.max(height, minHeight || 0),
			maxHeight || Infinity,
		);

		return heightComputed;
	}

	return null;
};

export const getHeightOnDragBottom = ({
	event,
	max: maxHeight,
	min: minHeight,
}: GetSizeOnDragParams): number | null => {
	if (
		event.currentTarget.parentElement &&
		event.currentTarget.parentElement.parentElement &&
		event.clientY > 0
	) {
		const height =
			event.clientY -
			event.currentTarget.parentElement.getBoundingClientRect().top;

		const heightComputed = Math.min(
			Math.max(height, minHeight || 0),
			maxHeight || Infinity,
		);

		return heightComputed;
	}

	return null;
};
