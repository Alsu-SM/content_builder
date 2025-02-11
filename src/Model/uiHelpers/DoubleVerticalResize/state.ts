import { action, computed, makeObservable, observable } from 'mobx';
import { DragEvent } from 'react';
import { DoubleVerticalResizeParams } from './types';
import {
	DOUBLE_LEFT_MAX_WIDTH,
	DOUBLE_LEFT_MIN_WIDTH,
	DOUBLE_LEFT_WIDTH,
	DOUBLE_RIGHT_MAX_WIDTH,
	DOUBLE_RIGHT_MIN_WIDTH,
	DOUBLE_RIGHT_WIDTH,
	TRANSPARENT_IMG_SRC,
} from './constants';
import getUUIDv7 from '../../../Utils/getUUIDv7';

export class DoubleVerticalResize {
	id: string = getUUIDv7();
	rightElementWidth: number = 0;
	leftElementWidth: number = 0;
	rightElementMinWidth: number = 0;
	leftElementMinWidth: number = 0;
	rightElementMaxWidth: number = 0;
	leftElementMaxWidth: number = 0;

	get leftElementStyle() {
		return { width: `${this.leftElementWidth}%` };
	}
	get rightElementStyle() {
		return {
			width: `${this.rightElementWidth}%`,
		};
	}

	constructor({
		rightElementMinWidth = DOUBLE_RIGHT_MIN_WIDTH,
		leftElementMinWidth = DOUBLE_LEFT_MIN_WIDTH,
		rightElementMaxWidth = DOUBLE_RIGHT_MAX_WIDTH,
		leftElementMaxWidth = DOUBLE_LEFT_MAX_WIDTH,
		rightElementWidth = DOUBLE_RIGHT_WIDTH,
		leftElementWidth = DOUBLE_LEFT_WIDTH,
	}: DoubleVerticalResizeParams) {
		this.rightElementWidth = rightElementWidth;
		this.leftElementWidth = leftElementWidth;
		this.rightElementMinWidth = rightElementMinWidth;
		this.leftElementMinWidth = leftElementMinWidth;
		this.rightElementMaxWidth = rightElementMaxWidth;
		this.leftElementMaxWidth = leftElementMaxWidth;

		makeObservable(this, {
			leftElementWidth: observable,
			rightElementWidth: observable,
			leftElementStyle: computed,
			rightElementStyle: computed,
			handleDrag: action,
		});
	}

	handleDrag(event: DragEvent<HTMLDivElement>) {
		if (
			event.currentTarget.parentElement &&
			event.currentTarget.parentElement.parentElement &&
			event.clientX !== 0
		) {
			if (event.currentTarget?.id === 'resizeLeft') {
				const leftElementWidth =
					event.clientX -
					event.currentTarget.parentElement.getBoundingClientRect().left;

				const convertedLeftElementWidth =
					(leftElementWidth /
						event.currentTarget.parentElement.getBoundingClientRect().width) *
					100;

				const isResizeAllowed: boolean =
					convertedLeftElementWidth > 0 &&
					convertedLeftElementWidth >= this.leftElementMinWidth &&
					convertedLeftElementWidth <= this.leftElementMaxWidth;
				console.log(isResizeAllowed);
				if (isResizeAllowed) {
					this.leftElementWidth = convertedLeftElementWidth;
				}
			}
			if (event.currentTarget?.id === 'resizeRight') {
				const rightElementWidth = Math.abs(
					event.currentTarget.parentElement.getBoundingClientRect().right -
						event.clientX,
				);
				const convertedRightElementWidth =
					(rightElementWidth /
						event.currentTarget.parentElement.getBoundingClientRect().width) *
					100;
				const isResizeAllowed: boolean =
					convertedRightElementWidth > 0 &&
					convertedRightElementWidth !== this.rightElementWidth &&
					convertedRightElementWidth >= this.rightElementMinWidth &&
					convertedRightElementWidth <= this.rightElementMaxWidth;

				if (isResizeAllowed) {
					this.rightElementWidth = convertedRightElementWidth;
				}
			}
		}
	}
	handleDragStart(event: React.DragEvent<HTMLDivElement>) {
		// способ убрать ghostImage
		const img = new Image();
		img.src = TRANSPARENT_IMG_SRC;
		event.dataTransfer.setDragImage(img, 0, 0);
	}
}
