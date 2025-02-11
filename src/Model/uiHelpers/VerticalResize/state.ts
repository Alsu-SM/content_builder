import { DragEvent } from 'react';
import { action, computed, makeObservable, observable } from 'mobx';
import getUUIDv7 from '../../../Utils/getUUIDv7';
import {
	LEFT_ELEMENT_MIN_WIDTH,
	RIGHT_ELEMENT_MIN_WIDTH,
	RIGHT_ELEMENT_WIDTH_PERCENT,
	TRANSPARENT_IMG_SRC,
} from './constants';
import { VerticalResizeParams } from './types';

export class VerticalResize {
	id: string = getUUIDv7();
	rightElementWidthPercent: number = 0;
	rightElementMinWidth: number = 0;
	leftElementMinWidth: number = 0;

	get leftElementStyle() {
		return { width: `${100 - this.rightElementWidthPercent}%` };
	}
	get rightElementStyle() {
		return {
			width: `${this.rightElementWidthPercent}%`,
		};
	}

	constructor({
		rightElementMinWidth = RIGHT_ELEMENT_MIN_WIDTH,
		rightElementWidthPercent = RIGHT_ELEMENT_WIDTH_PERCENT,
		leftElementMinWidth = LEFT_ELEMENT_MIN_WIDTH,
	}: VerticalResizeParams) {
		this.rightElementWidthPercent = rightElementWidthPercent;
		this.rightElementMinWidth = rightElementMinWidth;
		this.leftElementMinWidth = leftElementMinWidth;

		makeObservable(this, {
			rightElementWidthPercent: observable,
			rightElementMinWidth: observable,
			leftElementMinWidth: observable,
			leftElementStyle: computed,
			rightElementStyle: computed,
			handleDrag: action,
		});
	}

	handleDrag(event: DragEvent<HTMLDivElement>) {
		if (
			event.currentTarget.parentElement &&
			event.currentTarget.parentElement.parentElement
		) {
			const firstElementWidth =
				event.clientX -
				event.currentTarget.parentElement.getBoundingClientRect().left;
			const secondElementWidth =
				event.currentTarget.parentElement.getBoundingClientRect().width -
				firstElementWidth;
			const convertedSecondElementWidth =
				(secondElementWidth /
					event.currentTarget.parentElement.getBoundingClientRect().width) *
				100;
			if (
				convertedSecondElementWidth > 0 &&
				convertedSecondElementWidth !== this.rightElementWidthPercent &&
				firstElementWidth >= this.leftElementMinWidth &&
				secondElementWidth >= this.rightElementMinWidth
			) {
				this.rightElementWidthPercent = convertedSecondElementWidth;
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
