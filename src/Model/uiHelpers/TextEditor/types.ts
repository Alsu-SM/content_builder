export enum DocumentCommands {
	FormatBlock = 'formatBlock',
	FontFamily = 'fontName',
	FontSize = 'fontSize',
	Color = 'foreColor',
	Highlight = 'hiliteColor',
	Undo = 'undo',
	Redo = 'redo',
	Bold = 'bold',
	Underline = 'underline',
	Italic = 'italic',
	StrikeThrough = 'strikeThrough',
	AlignLeft = 'justifyLeft',
	AlignCenter = 'justifyCenter',
	AlignRight = 'justifyRight',
	AlignJustify = 'justifyFull',
	InsertOrderedList = 'insertOrderedList',
	InsertUnorderedList = 'insertUnorderedList',
	CreateLink = 'createLink',
	Unlink = 'unlink',
	RemoveFormat = 'removeFormat',
}

export enum BlockFormats {
	H1 = 'h1',
	H2 = 'h2',
	H3 = 'h3',
	H4 = 'h4',
	H5 = 'h5',
	H6 = 'h6',
	P = 'p',
}

export enum FontSizes {
	ExtraSmall = '1',
	Small = '2',
	Regular = '3',
	Medium = '4',
	Large = '5',
	ExtraLarge = '6',
	Big = '7',
}
