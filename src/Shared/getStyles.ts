import { HorizontalAlign, VerticalAlign } from './types';

export function getAlignItems(align: VerticalAlign): string {
	switch (align) {
		case VerticalAlign.Top:
			return 'flex-start';
		case VerticalAlign.Middle:
			return 'center';
		case VerticalAlign.Bottom:
			return 'flex-end';
	}
}

export function getJustifyContent(align: HorizontalAlign): string {
	switch (align) {
		case HorizontalAlign.Left:
			return 'flex-start';
		case HorizontalAlign.Center:
			return 'center';
		case HorizontalAlign.Right:
			return 'flex-end';
	}
}
