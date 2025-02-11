import { action, makeObservable, observable } from 'mobx';
import getUUIDv7 from '../../../Utils/getUUIDv7';

export class TextBlock {
	id: string = getUUIDv7();
	content: string = '';
	isEditMode: boolean = false;

	constructor(isEditMode: boolean = false) {
		this.isEditMode = isEditMode;

		makeObservable(this, {
			content: observable,
			isEditMode: observable,
			setContent: action,
			cancelEdit: action,
			startEdit: action,
			saveAndStopEdit: action,
		});
	}

	setContent(content: string) {
		this.content = content;
	}
	startEdit() {
		this.isEditMode = true;
	}
	cancelEdit() {
		this.isEditMode = false;
	}
	saveAndStopEdit(content: string) {
		console.log(content);
		this.isEditMode = false;
		this.content = content;
	}
}
