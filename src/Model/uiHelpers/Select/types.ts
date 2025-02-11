import { SelectOption } from '../../../Components/SelectUI/types';

export type ConstructorParams = {
	options: SelectOption[];
	value?: string;
	onOpen?: () => void;
};
