import { SelectOption } from '../../../Components/SelectUI/types';
import { DocumentCommands } from './types';

export function formatDocument(command: DocumentCommands, value?: string) {
	if (value) {
		document.execCommand(command, false, value);
	} else {
		document.execCommand(command);
	}
}

export async function getLocalFonts(): Promise<SelectOption[]> {
	return new Promise<SelectOption[]>(async (resolve, reject) => {
		if (!('queryLocalFonts' in window)) {
			reject();
		}
		// The Local Font Access API is supported
		try {
			//@ts-ignore
			const availableFonts = await window.queryLocalFonts();

			resolve(
				availableFonts.map((fontData: any) => ({
					name: fontData.fullName,
					id: fontData.fullName,
				})),
			);
		} catch (err) {
			console.error(err);
			reject();
		}
	});
}

export function getSelection() {
	const sel = window.getSelection();
	if (sel && sel.getRangeAt && sel.rangeCount) {
		return sel.getRangeAt(0);
	}

	return null;
}
