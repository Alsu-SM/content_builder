import { observer } from 'mobx-react-lite';
import { CoverBlockSettingsProps } from './types';
import styles from './CoverBlockEditor.module.css';
import {
	BackgroundType,
	HeightUnits,
} from '../../Model/pageBuilder/CoverBlock/types';
import Input from '../../Components/Input';
import Switcher from '../../Components/Switcher';
import {
	backgroundTypes,
	heightUnits,
	percentUnits,
	pxUnits,
} from './constants';
import ImagePicker from '../../Components/ImagePicker';
import clsx from 'clsx';
import Toggle from '../../Components/Toggle';
import ColorPicker from '../../Components/ColorPicker';

const CoverBlockSettings = observer(
	({ coverBlock }: CoverBlockSettingsProps) => {
		return (
			<div className={styles.settings}>
				<div className={styles.settings_title}>Cover block settings</div>
				<div className={styles.field_wrapper}>
					<div className={styles.field_title}>Block height: </div>
					<div className={styles.size_field}>
						<Input
							type="number"
							className={styles.input}
							value={coverBlock.height}
							onChange={(e) => coverBlock.handleHeightChange(e)}
						/>
						<Switcher
							items={heightUnits}
							value={coverBlock.heightUnits}
							onChange={(value) =>
								coverBlock.setHeightUnits(value as HeightUnits)
							}
							className={styles.switcher}
						/>
					</div>
				</div>
				<div className={styles.field_wrapper}>
					<div className={styles.field_title}>Gap: </div>
					<div className={styles.size_field}>
						<Input
							type="number"
							className={styles.input}
							value={coverBlock.gap}
							onChange={(e) => coverBlock.handleGapChange(e)}
						/>
						<Switcher
							items={pxUnits}
							value={HeightUnits.Px}
							onChange={() => {}}
							className={styles.switcher}
						/>
					</div>
				</div>
				<div className={styles.field_wrapper}>
					<div className={styles.field_title}>Padding: </div>
					<div className={styles.size_field}>
						<Input
							type="number"
							className={styles.input}
							value={coverBlock.paddingPercent}
							onChange={(e) => coverBlock.handlePaddingChange(e)}
						/>
						<Switcher
							items={percentUnits}
							value={HeightUnits.Percent}
							onChange={() => {}}
							className={styles.switcher}
						/>
					</div>
				</div>
				<div className={clsx(styles.field_wrapper, styles.field_wrapper_row)}>
					<div className={styles.field_title}>Add image overlay: </div>
					<Toggle
						checked={coverBlock.hasOverlay}
						onClick={() => coverBlock.toggleHasOverlay()}
					/>
				</div>
				<div className={clsx(styles.field_wrapper, styles.field_wrapper_row)}>
					<div className={styles.field_title}>Overlay color: </div>
					<ColorPicker
						color={coverBlock.overlayColor}
						onChange={(color) => coverBlock.setOverlayColor(color)}
						className={styles.color_picker}
					/>
				</div>

				<Switcher
					items={backgroundTypes}
					value={coverBlock.backgroundType}
					onChange={(value) =>
						coverBlock.setBackgroundType(value as BackgroundType)
					}
				/>
				{coverBlock.backgroundType === BackgroundType.Image && (
					<ImagePicker
						src={coverBlock.imageSrc || ''}
						onChange={(src) => coverBlock.setImageSrc(src)}
					/>
				)}
				{coverBlock.backgroundType === BackgroundType.Color && (
					<div className={styles.background_color_settings}>
						<div
							className={styles.background_preview}
							style={coverBlock.backgroundPreviewStyle}
						/>
						<ColorPicker
							className={styles.background_color_picker}
							color={coverBlock.color}
							onChange={(color) => coverBlock.setColor(color)}
						/>
					</div>
				)}
			</div>
		);
	},
);

export default CoverBlockSettings;
