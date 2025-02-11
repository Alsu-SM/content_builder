import { action, makeObservable, observable } from 'mobx';
import getUUIDv7 from '../../../Utils/getUUIDv7';

export class DroppableElement {
	id: string = getUUIDv7();
	isDragOver: boolean = false;

	constructor() {
		makeObservable(this, {
			isDragOver: observable,
			onDragEnter: action,
			onDragLeave: action,
		});
	}

	onDragEnter() {
		this.isDragOver = true;
	}
	onDragLeave() {
		this.isDragOver = false;
	}
}
