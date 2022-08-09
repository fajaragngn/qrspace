import { useState } from 'react';
import { SketchPicker } from 'react-color';

function ColorPicker({ id, label, customColor, handleQrCustom }) {
	const [showPicker, setShowPicker] = useState(false),
			handleShowPicker = ()=> setShowPicker(!showPicker);

	return(
		<div >
			<input
                className='inline mr-3 h-10 w-10 mt-5 '
				id={id}
				name={id}
				aria-label={id}
				type="button"
				style={{ background: customColor }}
				onClick={handleShowPicker}
			/>
			<label htmlFor={id}>Customize {label}</label>

			{showPicker &&
				<SketchPicker
					presetColors={['#000000', '#FFFFFF']}
					color={customColor}
					onChange={handleQrCustom}
				/>
			}
		</div>
	);
}

export default ColorPicker;