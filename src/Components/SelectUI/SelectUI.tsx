import { KeyboardEvent, useEffect, useRef } from 'react';
import clsx from 'clsx';

import styles from './SelectUI.module.css';
import { renderFnValueProps, SelectOption, SelectProps } from './types';
import useOnClickOutside from '../../Shared/useOnClickOutside';
import { AngleDown } from '../Icons';
import { observer } from 'mobx-react-lite';

function optionRenderFn({ name }: renderFnValueProps) {
	return name;
}

const SelectUI = observer(
	({
		select,
		label,
		isSearchDisabled,
		type = 'outlined',
		key = '',
		placeholder = '',
		disabled,
		className,
		style,
		name,
		onChange = () => {},
	}: SelectProps) => {
		const ref = useRef(null);
		const inputRef = useRef<HTMLInputElement>(null);

		const handleOptionClick = (value: SelectOption) => {
			onChange(value);
			select.onOptionClick();
		};

		const handleKeyDown = (event: Event) => {
			if (select.isOpen) {
				select.onKeyDown(event as unknown as KeyboardEvent);
			}
		};

		useOnClickOutside(ref, () => select.closeMenu());

		useEffect(() => {
			window.addEventListener('keydown', handleKeyDown);
			return () => {
				window.removeEventListener('keydown', handleKeyDown);
			};
		}, [select]);

		return (
			<div
				ref={ref}
				className={clsx('kit_select', styles.root, className)}
				style={style}
				role="combobox"
				aria-haspopup="listbox"
				aria-expanded={select.isOpen}
				aria-owns="select-options"
				aria-labelledby="select-label"
				aria-controls="select-options"
			>
				<label
					className={clsx(styles.label, {
						[styles.label_outlined]: type === 'outlined',
						[styles.label_contained]: type === 'contained',
						[styles.label_disabled]: disabled,
					})}
					id="select-label"
				>
					<span>{label}</span>
				</label>
				<div className={styles.value_wrapper}>
					{select.isOpen && !isSearchDisabled ? (
						<input
							className={styles.input}
							placeholder="Search"
							ref={inputRef}
							value={select.search}
							onChange={(e) => select.onSearch(e)}
							onPointerDown={(e) => {
								e.preventDefault();
							}}
						/>
					) : (
						<button
							disabled={disabled}
							className={clsx(styles.button)}
							onClick={() => {
								select.toggleMenu();
							}}
							aria-haspopup="true"
							aria-expanded={select.isOpen}
							aria-labelledby="select-label"
							name={name}
							onPointerDown={(e) => {
								e.preventDefault();
							}}
						>
							{select.selectedOption ? (
								<span className={styles.value}>
									{select.selectedOption.renderFn
										? select.selectedOption.renderFn()
										: select.selectedOption.name}
								</span>
							) : (
								<span className={styles.placeholder}>{placeholder}</span>
							)}
						</button>
					)}
					<div
						className={clsx(styles.arrow, select.isOpen && styles.arrow_open)}
					>
						<AngleDown className={styles.icon} />
					</div>
				</div>

				{select.isOpen && (
					<div className={styles.options}>
						{select.filteredOptions.map((option) => {
							const { renderFn = optionRenderFn, name, id, disabled } = option;
							return (
								<button
									key={`${key}-${option.id}`}
									onClick={() => handleOptionClick(option)}
									className={clsx(styles.option__button, {
										[styles.selected]: option.id === select.selectedOption?.id,
									})}
									role="option"
									disabled={option.disabled}
									aria-selected={option.id === select.selectedOption?.id}
									onPointerDown={(e) => {
										e.preventDefault();
									}}
								>
									{renderFn({ name, id, disabled })}
								</button>
							);
						})}
					</div>
				)}
			</div>
		);
	},
);

export default SelectUI;
