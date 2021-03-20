import React, { useState } from 'react';
import Progressbar from './Progressbar';

function UploadForm() {
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);
	const types = ['image/png', 'image/jpeg'];
	const changeHandler = (e) => {
		let selected = e.target.files[0];
		if (selected) {
			if (types.includes(selected.type)) {
				setFile(selected);
				setError('');
			} else {
				setError('Please select an image file (png or jpeg)');
				setFile(null);
			}
		} else {
			setFile(null);
			setError('');
		}
	};

	return (
		<form>
			<label>
				<input type='file' accept='image/*' onChange={changeHandler} />
				<span>+</span>
			</label>

			<div className='output'>
				{error && <div className='error'>{error}</div>}
				{file && <div>{file.name}</div>}
				{file && <Progressbar file={file} setFile={setFile} />}
			</div>
		</form>
	);
}

export default UploadForm;
