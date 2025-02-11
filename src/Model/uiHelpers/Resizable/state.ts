import { action, computed, makeObservable, observable } from 'mobx';
import getUUIDv7 from '../../../Utils/getUUIDv7';
import { ConstructorParams, ResizeType } from './types';
import { TRANSPARENT_IMG_SRC } from './constants';
import { CSSProperties, DragEvent } from 'react';
import {
	getHeightOnDragBottom,
	getHeightOnDragTop,
	getWidthOnDragLeft,
	getWidthOnDragRight,
} from './utils';

export class Resizable {
	id: string = getUUIDv7();
	width?: number;
	height?: number;
	minWidth?: number;
	minHeight?: number;
	maxWidth?: number;
	maxHeight?: number;
	types: ResizeType[] = [];

	get sizeStyle() {
		const style: CSSProperties = {};

		if (this.width !== undefined) {
			style.width = `${this.width}px`;
		}
		if (this.height !== undefined) {
			style.height = `${this.height}px`;
		}

		return style;
	}

	constructor({
		maxHeight,
		maxWidth,
		minHeight,
		minWidth,
		types,
	}: ConstructorParams) {
		this.maxHeight = maxHeight;
		this.maxWidth = maxWidth;
		this.minHeight = minHeight;
		this.minWidth = minWidth;
		this.width = minWidth;
		this.height = minHeight;
		this.types = types;

		makeObservable(this, {
			width: observable,
			height: observable,
			sizeStyle: computed,
			handleDrag: action,
		});
	}

	handleDrag(event: DragEvent<HTMLDivElement>) {
		switch (event.currentTarget?.id) {
			case ResizeType.HorizontalLeft:
				this.handleDragLeft(event);
				break;
			case ResizeType.HorizontalRight:
				this.handleDragRight(event);
				break;
			case ResizeType.VerticalTop:
				this.handleDragTop(event);
				break;
			case ResizeType.VerticalBottom:
				this.handleDragBottom(event);
				break;
			case ResizeType.TopRight:
				this.handleDragTopRight(event);
				break;
			case ResizeType.BottomRight:
				this.handleDragBottomRight(event);
				break;
			case ResizeType.TopLeft:
				this.handleDragTopLeft(event);
				break;
			case ResizeType.BottomLeft:
				this.handleDragBottomLeft(event);
				break;
			default:
				break;
		}
	}
	handleDragLeft(event: DragEvent<HTMLDivElement>) {
		const width = getWidthOnDragLeft({
			event,
			max: this.maxWidth,
			min: this.minWidth,
		});

		if (width !== null) {
			this.width = width;
		}
	}
	handleDragRight(event: DragEvent<HTMLDivElement>) {
		const width = getWidthOnDragRight({
			event,
			max: this.maxWidth,
			min: this.minWidth,
		});

		if (width !== null) {
			this.width = width;
		}
	}
	handleDragTop(event: DragEvent<HTMLDivElement>) {
		const height = getHeightOnDragTop({
			event,
			max: this.maxHeight,
			min: this.minHeight,
		});

		if (height !== null) {
			this.height = height;
		}
	}
	handleDragBottom(event: DragEvent<HTMLDivElement>) {
		const height = getHeightOnDragBottom({
			event,
			max: this.maxHeight,
			min: this.minHeight,
		});

		if (height !== null) {
			this.height = height;
		}
	}
	handleDragTopRight(event: DragEvent<HTMLDivElement>) {
		this.handleDragTop(event);
		this.handleDragRight(event);
	}
	handleDragBottomRight(event: DragEvent<HTMLDivElement>) {
		this.handleDragBottom(event);
		this.handleDragRight(event);
	}
	handleDragTopLeft(event: DragEvent<HTMLDivElement>) {
		this.handleDragTop(event);
		this.handleDragLeft(event);
	}
	handleDragBottomLeft(event: DragEvent<HTMLDivElement>) {
		this.handleDragBottom(event);
		this.handleDragLeft(event);
	}
	handleDragStart(event: React.DragEvent<HTMLDivElement>) {
		// способ убрать ghostImage
		const img = new Image();
		img.src = TRANSPARENT_IMG_SRC;
		event.dataTransfer.setDragImage(img, 0, 0);
	}
}
