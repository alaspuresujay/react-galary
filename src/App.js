import './App.css';
import ImageGrid from './Components/ImageGrid';
import UploadForm from './Components/UploadForm';
import Modal from './Components/Modal';
import { useState } from 'react';
function App() {
	const [selectedImg, setSelectedImg] = useState(null);

	return (
		<div className='App'>
			<UploadForm />
			<ImageGrid setSelectedImg={setSelectedImg} />
			{selectedImg && (
				<Modal
					selectedImg={selectedImg}
					setSelectedImg={setSelectedImg}
				/>
			)}
		</div>
	);
}

export default App;
