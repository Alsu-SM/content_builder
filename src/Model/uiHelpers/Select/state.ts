import {
	action,
	computed,
	makeObservable,
	observable,
	runInAction,
} from 'mobx';
import getUUIDv7 from '../../../Utils/getUUIDv7';
import { SelectOption } from '../../../Components/SelectUI/types';
import { ChangeEvent, KeyboardEvent } from 'react';
import { ConstructorParams } from './types';

export class Select {
	id: string = getUUIDv7();
	value: string = '';
	search: string = '';
	options: SelectOption[] = [];
	isOpen: boolean = false;
	onOpen: () => void = () => {};

	get filteredOptions() {
		const regExp = new RegExp(this.search, 'i');

		return this.options.filter(
			(option) => regExp.test(option.id) || regExp.test(option.name),
		);
	}
	get selectedOption() {
		return this.options.find((option) => option.id === this.value) || null;
	}

	constructor({ value = '', options }: ConstructorParams) {
		this.value = value;
		this.options = options;

		makeObservable(this, {
			isOpen: observable,
			options: observable,
			search: observable,
			filteredOptions: computed,
			selectedOption: computed,
			onSearch: action,
			onOptionClick: action,
			openMenu: action,
			closeMenu: action,
			onKeyDown: action,
			toggleMenu: action,
		});
	}

	onSearch(event: ChangeEvent<HTMLInputElement>) {
		this.search = event.target.value;
	}
	onOptionClick() {
		this.isOpen = false;
	}
	openMenu() {
		this.isOpen = true;
	}
	closeMenu() {
		this.isOpen = false;
		this.search = '';
	}
	setOptions(options: SelectOption[]) {
		runInAction(() => {
			this.options = options;
		});
	}
	toggleMenu() {
		if (this.isOpen) {
			this.closeMenu();
			return;
		}

		this.openMenu();
		this.onOpen();
	}
	onKeyDown(event: KeyboardEvent) {
		event.preventDefault();
		event.stopPropagation();
		const { key, keyCode } = event;
		if (Number(keyCode) === 8) {
			this.search =
				this.search.length > 0 ? this.search.slice(0, -1) : this.search;
			return;
		}

		if (Number(keyCode) >= 65 && Number(keyCode) <= 90) {
			this.search = `${this.search}${key}`;
		}
	}
}
