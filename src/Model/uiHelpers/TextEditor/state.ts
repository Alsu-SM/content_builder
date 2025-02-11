import {
	action,
	computed,
	makeObservable,
	observable,
	runInAction,
} from 'mobx';
import getUUIDv7 from '../../../Utils/getUUIDv7';
import { DocumentCommands } from './types';
import { formatDocument, getLocalFonts, getSelection } from './utils';
import { KeyboardEvent, MouseEvent } from 'react';
import { SelectOption } from '../../../Components/SelectUI/types';
import { FORMATS_OPTIONS, SIZES_OPTIONS } from './constants';

export class TextEditor {
	id: string = getUUIDv7();
	content: string = '';
	element: HTMLDivElement | null = null;
	fonts: SelectOption[] = [];
	formats: SelectOption[] = FORMATS_OPTIONS;
	sizes: SelectOption[] = SIZES_OPTIONS;
	isActive: boolean = false;
	selection: Selection | null = null;
	fragment: DocumentFragment | null = null;
	range: Range | null = null;
	span: HTMLSpanElement | null = null;
	currentColor: string = '';
	currentHighLight: string = '';
	currentFontFamily: string = '';
	currentFontSize: number = 0;

	get editorValue() {
		if (this.element) {
			return this.element.innerHTML;
		}

		return '';
	}

	constructor(content: string = 'test') {
		this.content = content;

		makeObservable(this, {
			content: observable,
			fonts: observable,
			isActive: observable,
			currentColor: observable,
			currentHighLight: observable,
			currentFontFamily: observable,
			currentFontSize: observable,
			editorValue: computed,
			setElement: action,
			onMouseEnter: action,
			onFocus: action,
			onBlur: action,
			onMouseKeyUp: action,
			getFonts: action,
		});
	}

	setElement(element: HTMLDivElement) {
		this.element = element;
		this.element.innerHTML = this.content;
		this.element.focus();
	}
	addLinkListeners() {
		if (!this.element) {
			return;
		}

		const a = this.element.querySelectorAll('a');
		a.forEach((item) => {
			item.addEventListener('mouseenter', () => {
				if (this.element) {
					this.element.setAttribute('contenteditable', 'false');
					item.target = '_blank';
				}
			});
			item.addEventListener('mouseleave', () => {
				if (this.element) {
					this.element.setAttribute('contenteditable', 'true');
				}
			});
		});
	}
	onMouseEnter() {
		this.addLinkListeners();
	}
	onColorChange(color: string) {
		this.color(color);
		this.currentColor = color;
	}
	onHighlightChange(color: string) {
		this.highlight(color);
		this.currentHighLight = color;
	}
	undo() {
		formatDocument(DocumentCommands.Undo);
	}
	redo() {
		formatDocument(DocumentCommands.Redo);
	}
	bold() {
		formatDocument(DocumentCommands.Bold);
	}
	underline() {
		formatDocument(DocumentCommands.Underline);
	}
	italic() {
		formatDocument(DocumentCommands.Italic);
	}
	strikeThrough() {
		formatDocument(DocumentCommands.StrikeThrough);
	}
	alignLeft() {
		formatDocument(DocumentCommands.AlignLeft);
	}
	alignRight() {
		formatDocument(DocumentCommands.AlignRight);
	}
	alignCenter() {
		formatDocument(DocumentCommands.AlignCenter);
	}
	alignJustify() {
		formatDocument(DocumentCommands.AlignJustify);
	}
	insertOrderedList() {
		formatDocument(DocumentCommands.InsertOrderedList);
	}
	insertUnorderedList() {
		formatDocument(DocumentCommands.InsertUnorderedList);
	}
	createLink() {
		const link = prompt('Create link:', 'https://');

		if (link) {
			formatDocument(DocumentCommands.CreateLink, link);
			this.addLinkListeners();
		}
	}
	unlink() {
		formatDocument(DocumentCommands.Unlink);
	}
	formatBlock(format: SelectOption) {
		this.beforeFormat();
		formatDocument(DocumentCommands.FormatBlock, format.id);
		this.afterFormat();
	}
	formatSize(size: number) {
		formatDocument(DocumentCommands.FontSize, `${size}px`);
		this.currentFontSize = size;
	}
	color(color: string) {
		formatDocument(DocumentCommands.Color, color);
	}
	highlight(color: string) {
		formatDocument(DocumentCommands.Highlight, color);
	}
	selectFont(font: SelectOption) {
		this.beforeFormat();
		formatDocument(DocumentCommands.FontFamily, font.id);
		this.afterFormat();
	}
	removeFormat() {
		formatDocument(DocumentCommands.RemoveFormat);
	}
	getFonts() {
		getLocalFonts().then((fonts) => {
			runInAction(() => {
				this.fonts = fonts;
			});
		});
	}
	onFocus() {
		this.isActive = true;
	}
	onBlur() {
		this.isActive = false;
	}
	onClickOutside() {
		this.range?.deleteContents();
		this.span?.classList.remove('selected');
		if (this.fragment) {
			this.range?.insertNode(this.fragment);
		}
		this.span = null;
		this.range = null;
		this.fragment = null;
	}
	onMouseKeyUp(e: MouseEvent | KeyboardEvent) {
		const style = window.getComputedStyle(e.target as Element, null);
		if (style.color) {
			this.currentColor = style.color;
		}

		if (style.backgroundColor) {
			this.currentHighLight = style.backgroundColor;
		}

		if (style.fontFamily) {
			this.currentFontFamily = style.fontFamily
				.replace(/["']/g, '')
				.split(',')[0];
		}

		if (style.fontSize) {
			this.currentFontSize = Number(style.fontSize.split('px')[0]);
		}
	}
	onEditableBlur() {
		if (this.fragment && this.range) {
			const span = document.createElement('span');
			span.className = 'selected';
			this.range.surroundContents(span);
			this.span = span;
		}
	}
	onEditableFocus() {
		if (this.fragment && this.range) {
			this.range.deleteContents();
			this.span?.classList.remove('selected');
			this.range.insertNode(this.fragment);
			const sel = window.getSelection();
			if (sel) {
				sel.removeAllRanges();
				sel.addRange(this.range);
			}
		}
	}
	beforeFormat() {
		if (this.span) {
			const selection = window.getSelection();

			if (selection) {
				const range = document.createRange();
				range.setStartBefore(this.span);
				range.setEndAfter(this.span);
				selection.removeAllRanges();
				selection.addRange(range);
			}
		}
	}
	afterFormat() {
		this.span = null;
		this.range = null;
	}
}
