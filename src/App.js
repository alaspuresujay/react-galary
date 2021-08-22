import './App.css';
import ImageGrid from './Components/ImageGrid';
import UploadForm from './Components/UploadForm';
import Modal from './Components/Modal';
import { useState } from 'react';
import PhotoGrid from './Components/PhotoGrid';
function App() {
	const [selectedImg, setSelectedImg] = useState(null);

	return (
		<div className='App'>
			{/* <PhotoGrid /> */}
			<UploadForm />
			<ImageGrid setSelectedImg={setSelectedImg} />
			{selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
		</div>
	);
}

export default App;
