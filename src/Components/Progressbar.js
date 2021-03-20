import React, { useEffect } from 'react';
import UseStorage from './UseStorage';
import { motion } from 'framer-motion';

function Progressbar(props) {
	const { file, setFile } = props;
	const { url, progress } = UseStorage(file);
	console.log(progress, url);
	useEffect(() => {
		if (url) {
			setFile(null);
		}
	}, [url, setFile]);
	return (
		<motion.div
			className='progress-bar'
			initial={{ width: 0 }}
			animate={{ width: progress + '%' }}></motion.div>
	);
}

export default Progressbar;
