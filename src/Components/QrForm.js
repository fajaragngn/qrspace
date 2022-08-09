import { useEffect, useState } from 'react';
import Url from './Url';
import ColorPicker from './ColorPicker';
import Image from './Image';

function QrForm({ qrRef, url, qrColor, qrBgColor, noImg, setUrl, setQrColor, setQrBgColor, setCustomImg, setNoImg, handleQrReset }) {
	const httpRgx = /^https?:\/\//;

	const [downloaded, setDownloaded] = useState(false);
	
	useEffect(() => {
		if(downloaded) {
			const msg = setTimeout(()=>setDownloaded(false), 3500);
			return () => clearTimeout(msg);
		}
	}, [downloaded]);
	
	const handleQrCustom = color => setQrColor(color.hex),
			handleQrBgCustom = color => setQrBgColor(color.hex);

	const downloadQrCode = e => {
		e.preventDefault();

		const qrCanvas = qrRef.current.querySelector('canvas'),
				qrImage = qrCanvas.toDataURL("image/png"),
				qrAnchor = document.createElement('a'),
				fileName = url.replace(httpRgx, '').trim();
		qrAnchor.href = qrImage;
		qrAnchor.download = fileName+'_QrCode.png';
		document.body.appendChild(qrAnchor);
		qrAnchor.click();
		document.body.removeChild(qrAnchor);
	
		handleQrReset();
		setDownloaded(true);
	}

	return(
		<form onSubmit={downloadQrCode}>
			<h1>Generate your Qr Code</h1>
			<Url
				url={url}
				setUrl={setUrl}
				httpRgx={httpRgx}
			/>

			<ColorPicker
				label={'Qr color'}
				id={'qrColor'}
				customColor={qrColor}
				handleQrCustom={handleQrCustom}
			/>

			<ColorPicker
				label={'background'}
				id={'qrBgColor'}
				customColor={qrBgColor}
				handleQrCustom={handleQrBgCustom}
			/>
			
			<Image
				noImg={noImg}
				setNoImg={setNoImg}
				setCustomImg={setCustomImg}
			/>
			<button type="submit">
				<span>Download now</span>
			</button>
			
			{downloaded &&
				<p className="success-msg">Qr Code downloaded.</p>
			}
		</form>
	);
}

export default QrForm;