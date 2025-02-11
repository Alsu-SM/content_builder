import { SwitcherItem } from '../../Components/Switcher/types';
import {
	BackgroundType,
	HeightUnits,
} from '../../Model/pageBuilder/CoverBlock/types';

export const backgroundTypes: SwitcherItem[] = [
	{
		id: BackgroundType.Image,
		name: 'Image',
	},
	{
		id: BackgroundType.Color,
		name: 'Color',
	},

	{
		id: BackgroundType.None,
		name: 'None',
	},
];

export const heightUnits: SwitcherItem[] = [
	{
		id: HeightUnits.Dvh,
		name: 'dvh',
	},
	{
		id: HeightUnits.Px,
		name: 'px',
	},
];
export const pxUnits: SwitcherItem[] = [
	{
		id: HeightUnits.Px,
		name: 'px',
	},
];
export const percentUnits: SwitcherItem[] = [
	{
		id: HeightUnits.Percent,
		name: HeightUnits.Percent,
	},
];
