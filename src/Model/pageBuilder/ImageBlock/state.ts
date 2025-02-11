import { action, makeObservable, observable } from 'mobx';
import getUUIDv7 from '../../../Utils/getUUIDv7';

export class ImageBlock {
	id: string = getUUIDv7();
	src: string = '';
	width: number = 0;
	height: number = 0;

	constructor() {
		makeObservable(this, {
			src: observable,
			width: observable,
			height: observable,
			setSrc: action,
			setSize: action,
		});
	}

	setSrc(src: string) {
		this.src = src;
	}
	setSize(width: number, height: number) {
		this.width = width;
		this.height = height;
	}
}
