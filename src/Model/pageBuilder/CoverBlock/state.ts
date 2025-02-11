import { action, computed, makeObservable, observable } from 'mobx';
import getUUIDv7 from '../../../Utils/getUUIDv7';
import {
	BackgroundType,
	ConstructorParams,
	CoverContent,
	HeightUnits,
} from './types';
import { HorizontalAlign, VerticalAlign } from '../../../Shared/types';
import { ChangeEvent, CSSProperties } from 'react';
import { getAlignItems, getJustifyContent } from '../../../Shared/getStyles';

export class CoverBlock {
	id: string = getUUIDv7();
	imageSrc?: string;
	color: string = 'rgb(39 39 39)';
	gradient?: string;
	height: number;
	gap?: number;
	content: CoverContent[] = [];
	horizontalAlign: HorizontalAlign = HorizontalAlign.Center;
	verticalAlign: VerticalAlign = VerticalAlign.Middle;
	paddingPercent: number = 10;
	isCoverSettingsShown: boolean = false;
	backgroundType: BackgroundType = BackgroundType.None;
	heightUnits: HeightUnits = HeightUnits.Dvh;
	hasOverlay: boolean = false;
	overlayColor: string = 'rgba(0,0,0,0.2)';
	overlayPadding: number = 50;
	overlayBorderRadius: number = 25;

	get wrapperStyle() {
		const style: CSSProperties = { display: 'flex', flexDirection: 'column' };

		style.height = `${this.height}${this.heightUnits}`;
		style.alignItems = getAlignItems(this.verticalAlign);
		style.justifyContent = getJustifyContent(this.horizontalAlign);
		style.padding = `0 ${this.paddingPercent}%`;

		if (this.backgroundType === BackgroundType.Color) {
			style.background = this.color;
		}
		return style;
	}

	get itemsWrapperStyle() {
		const style: CSSProperties = { display: 'flex', flexDirection: 'column' };
		style.gap = `${this.gap || 0}px`;
		style.padding = `${this.overlayPadding}px`;
		style.borderRadius = `${this.overlayBorderRadius}px`;

		if (this.hasOverlay) {
			style.background = this.overlayColor;
		}

		return style;
	}

	get backgroundPreviewStyle() {
		const style: CSSProperties = {};

		if (this.backgroundType === BackgroundType.Color && this.color) {
			style.background = this.color;
		}

		if (this.backgroundType === BackgroundType.Gradient && this.gradient) {
			style.background = this.gradient;
		}

		return style;
	}

	constructor({
		imageSrc,
		color = 'rgb(39 39 39)',
		gradient,
		content = [],
		gap,
		height = 100,
		backgroundType = BackgroundType.None,
		horizontalAlign = HorizontalAlign.Center,
		verticalAlign = VerticalAlign.Middle,
		paddingPercent = 10,
		heightUnits = HeightUnits.Dvh,
		hasOverlay = false,
	}: ConstructorParams) {
		this.imageSrc = imageSrc;
		this.color = color;
		this.gradient = gradient;
		this.height = height;
		this.content = content;
		this.horizontalAlign = horizontalAlign;
		this.verticalAlign = verticalAlign;
		this.gap = gap;
		this.paddingPercent = paddingPercent;
		this.backgroundType = backgroundType;
		this.heightUnits = heightUnits;
		this.hasOverlay = hasOverlay;

		makeObservable(this, {
			imageSrc: observable,
			color: observable,
			height: observable,
			content: observable,
			horizontalAlign: observable,
			verticalAlign: observable,
			isCoverSettingsShown: observable,
			backgroundType: observable,
			heightUnits: observable,
			hasOverlay: observable,
			overlayBorderRadius: observable,
			overlayColor: observable,
			overlayPadding: observable,
			gap: observable,
			paddingPercent: observable,
			wrapperStyle: computed,
			itemsWrapperStyle: computed,
			backgroundPreviewStyle: computed,
			setImageSrc: action,
			setBackground: action,
			setHeight: action,
			addContent: action,
			deleteContent: action,
			editContent: action,
			openSettings: action,
			closeSettings: action,
			setContentOrder: action,
			setBackgroundType: action,
			setHeightUnits: action,
			handleHeightChange: action,
			toggleHasOverlay: action,
			handleGapChange: action,
			handlePaddingChange: action,
			setOverlayColor: action,
			setColor: action,
		});
	}

	setImageSrc(imageSrc: string) {
		this.imageSrc = imageSrc;
	}
	setBackground(color: string) {
		this.color = color;
	}
	setHeight(height: number) {
		this.height = height;
	}
	handleHeightChange(event: ChangeEvent<HTMLInputElement>) {
		this.height = Number(event.target.value);
	}
	handleGapChange(event: ChangeEvent<HTMLInputElement>) {
		this.gap = Number(event.target.value);
	}
	handlePaddingChange(event: ChangeEvent<HTMLInputElement>) {
		this.paddingPercent = Number(event.target.value);
	}
	copyContent(element: CoverContent) {
		this.content.push({ id: getUUIDv7(), data: element.data });
	}
	addContent() {
		this.content.push({ id: getUUIDv7(), data: 'Text' });
	}
	deleteContent(id: string) {
		this.content = this.content.filter((item) => item.id !== id);
	}
	toggleHasOverlay() {
		this.hasOverlay = !this.hasOverlay;
	}
	editContent(item: CoverContent) {
		this.content = this.content.map((contentItem) => {
			if (item.id === contentItem.id) {
				return item;
			}

			return contentItem;
		});
	}
	setContentOrder(ids: string[]) {
		const newItems = ids.reduce((items: CoverContent[], id: string) => {
			const item = this.content.find((content) => content.id === id);

			if (item) {
				items.push(item);
			}

			return items;
		}, []);

		this.content = newItems;
	}
	openSettings() {
		this.isCoverSettingsShown = true;
	}
	closeSettings() {
		this.isCoverSettingsShown = false;
	}
	setBackgroundType(backgroundType: BackgroundType) {
		this.backgroundType = backgroundType;
		console.log(this.backgroundType);
	}
	setHeightUnits(heightUnits: HeightUnits) {
		this.heightUnits = heightUnits;
	}
	setOverlayColor(color: string) {
		this.overlayColor = color;
	}
	setColor(color: string) {
		this.color = color;
	}
}
