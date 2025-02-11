import { useRef } from 'react';

function useImagePicker(onChange: (src: string) => void) {
	const ref = useRef<HTMLInputElement>(null);

	const handleChange = () => {
		if (ref.current && ref.current.files && ref.current.files[0]) {
			const reader = new FileReader();
			reader.onload = function (e) {
				if (e.target && typeof e.target.result === 'string') {
					onChange(e.target.result);
				}
			};
			reader.readAsDataURL(ref.current.files[0]);
		}
	};

	const handleDelete = () => {
		onChange('');
	};

	return { ref, handleChange, handleDelete };
}

export default useImagePicker;
