import { action, makeObservable, observable } from 'mobx';
import getUUIDv7 from '../../../Utils/getUUIDv7';
import { PageElement, PageElementType } from './types';
import { ImageBlock } from '../ImageBlock';
import { TextBlock } from '../TextBlock';
import { CoverBlock } from '../CoverBlock';
import { COVER_DEFAULT } from './constants';
import { BackgroundType } from '../CoverBlock/types';

export class Page {
	id: string = getUUIDv7();
	elements: PageElement[] = [];
	activeElementId: string = '';
	areSettingsShown: boolean = false;
	isTopBarShown: boolean = true;

	constructor() {
		makeObservable(this, {
			elements: observable,
			activeElementId: observable,
			areSettingsShown: observable,
			isTopBarShown: observable,
			addElement: action,
			deleteElement: action,
			focusElement: action,
			hideSettings: action,
			showSettings: action,
			toggleSettings: action,
			hideTopBar: action,
			showTopBar: action,
		});
	}

	addElement(elementType: PageElementType) {
		switch (elementType) {
			case PageElementType.ImageBlock:
				this.elements.push({
					type: elementType,
					data: new ImageBlock(),
					order: this.elements.length,
				});
				break;

			case PageElementType.TextBlock:
				this.elements.push({
					type: elementType,
					data: new TextBlock(true),
					order: this.elements.length,
				});
				break;
			case PageElementType.Cover:
				this.elements.push({
					type: elementType,
					data: new CoverBlock(COVER_DEFAULT),
					order: this.elements.length,
				});
				break;
		}

		this.activeElementId = this.elements[this.elements.length - 1].data.id;
	}
	deleteElement(id: string) {
		this.elements = this.elements.filter(({ data }) => data.id !== id);

		if (this.activeElementId === id) {
			this.activeElementId = '';
		}
	}
	focusElement(element: PageElement) {
		this.activeElementId = element.data.id;
	}
	hideSettings() {
		this.areSettingsShown = false;
	}
	showSettings() {
		this.areSettingsShown = true;
	}
	toggleSettings() {
		this.areSettingsShown = !this.areSettingsShown;
	}
	hideTopBar() {
		this.isTopBarShown = false;
	}
	showTopBar() {
		this.isTopBarShown = true;
	}
}
