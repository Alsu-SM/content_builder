import { action, makeObservable, observable } from 'mobx';
import getUUIDv7 from '../../../Utils/getUUIDv7';

export class DraggableElement {
	id: string = getUUIDv7();
	isDragActive: boolean = false;

	constructor() {
		makeObservable(this, {
			isDragActive: observable,
			onDragStart: action,
			onDragEnd: action,
		});
	}

	onDragStart() {
		this.isDragActive = true;
	}
	onDragEnd() {
		this.isDragActive = false;
	}
}
