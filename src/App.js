import { useRef, useState } from 'react';
import DarkMode from './Components/DarkMode';
import QrForm from './Components/QrForm';
import QrCard from './Components/QrCard';

function App() {
	const qrRef = useRef();

	const [url, setUrl] = useState(''),
			[qrColor, setQrColor] = useState('#ffffff'),
			[qrBgColor, setQrBgColor] = useState('#2c7dfa'),
			[customImg, setCustomImg] = useState(''),
			[noImg, setNoImg] = useState(false);
			
	const handleQrReset = () => {
		setUrl('');
		setQrColor('#ffffff');
		setQrBgColor('#2c7dfa');
		setCustomImg('');
		setNoImg(false);
	}

	return (
		<div className='main flex justify-around ' >
        <QrForm
					qrRef={qrRef}
					url={url}
					qrColor={qrColor}
					qrBgColor={qrBgColor}
					noImg={noImg}
					setUrl={setUrl}
					setQrColor={setQrColor}
					setQrBgColor={setQrBgColor}
					setCustomImg={setCustomImg}
					setNoImg={setNoImg}
					handleQrReset={handleQrReset}
				/>
				<QrCard
					qrRef={qrRef}
					url={url}
					qrColor={qrColor}
					bgColor={qrBgColor}
					customImg={customImg}
					noImg={noImg}
				/>

		</div>
	);
}

export default App;