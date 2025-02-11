import { action, computed, makeObservable, observable } from 'mobx';
import getUUIDv7 from '../../../Utils/getUUIDv7';
import { PageElementType } from '../Page';
import { PageElementOption } from './types';
import { ChangeEvent } from 'react';
import { BLOCK_LIBRARY_ITEMS } from './constants';

export class BlockLibrary {
	id: string = getUUIDv7();
	search: string = '';
	elements: PageElementOption[] = BLOCK_LIBRARY_ITEMS;

	get filteredElements() {
		const regExp = new RegExp(this.search, 'i');

		return this.elements.filter(
			(element) =>
				regExp.test(element.id) ||
				regExp.test(element.name) ||
				regExp.test(element.description),
		);
	}
	constructor() {
		makeObservable(this, {
			elements: observable,
			search: observable,
			filteredElements: computed,
			onSearchChange: action,
		});
	}

	onSearchChange(event: ChangeEvent<HTMLInputElement>) {
		this.search = event.target.value;
	}
}
