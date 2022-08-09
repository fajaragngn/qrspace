import QrCode from 'qrcode.react';

function QrCard({ qrRef, url, bgColor, qrColor, customImg, noImg }) {
	let imgCustom =  undefined;

	noImg ?
		imgCustom = null :
		customImg ?
			imgCustom = customImg :
			imgCustom = './logo-apple-icon192.png';

	return (
		<div className="card ">
			<div className="qr-box"
				ref={qrRef}
				style={{ backgroundColor: bgColor }}>
			
				<QrCode
                    className='qr-code'
					size={250}
					value={url ? url : 'https://fajarspace.netlify.app'}
					bgColor={bgColor}
					fgColor={qrColor}
					level='H'
					includeMargin
					imageSettings={{
						src: imgCustom,
						height: 45,
						width: 45,
						excavate: true,
					}}
				/>

			</div>
			<h2 className="word-wrap">{url ? url : 'qrspace.site'}</h2>
		</div>
	);
}

export default QrCard;