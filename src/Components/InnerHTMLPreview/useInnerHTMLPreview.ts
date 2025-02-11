import { useEffect, useRef } from 'react';

function useInnerHTMLPreview(innerHTML: string) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (ref.current) {
			ref.current.innerHTML = innerHTML;
		}
	}, [ref.current !== null, innerHTML]);

	return { ref };
}

export default useInnerHTMLPreview;
