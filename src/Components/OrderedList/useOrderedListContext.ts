import { useContext } from 'react';
import { ListContext } from './OrderedListContext';

function useOrderedListContext() {
	const listContext = useContext(ListContext);

	return listContext;
}

export default useOrderedListContext;
