import {
	BackgroundType,
	ConstructorParams,
	HeightUnits,
} from '../CoverBlock/types';
import cover from '../../../Assets/cover_bg_img.png';

export const COVER_DEFAULT: ConstructorParams = {
	imageSrc: cover,
	content: [
		{
			id: 'cover_content_1',
			data: '<div style="text-align: center;"><span style="white-space-collapse: preserve;"><font style="font-size: 90px" color="#ffffff" face="Comfortaa">WONDERS</font></span></div>',
		},
		{
			id: 'cover_content_2',
			data: '<div style="text-align: center;"><span style="white-space-collapse: preserve;"><font style="font-size: 40px" color="#ffffff" face="Comfortaa">Everything that you dreamed of can be brought to life exactly at the moment when you decide to win.</font></span></div>',
		},
	],
	gap: 50,
	paddingPercent: 20,
	backgroundType: BackgroundType.Image,
	height: 100,
	heightUnits: HeightUnits.Dvh,
};
