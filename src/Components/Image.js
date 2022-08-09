function Image({ noImg, setNoImg, setCustomImg }) {
	const handleImage = e => {
		const reader = new FileReader();
		reader.onload = () => {
			if(reader.readyState === 2) {
				setCustomImg(reader.result);
			}
		}
		reader.readAsDataURL(e.target.files[0]);
	}

	return (
		<div className="mt-5 mb-5" >
			<label htmlFor="file">Upload logo</label>		
			<input
				id="file"
				name="file"
				type="file"
				accept="image/png, image/jpeg"
				onChange={handleImage}
				disabled={noImg}
			/>

			<input
				id="noImg"
				name="noImg"
				type="checkbox"
				value={noImg}
				checked={noImg}
				onClick={()=>setNoImg(!noImg)}
			/>
			<label className="text-sm font-sans tracking-normal" htmlFor="noImg">Tanpa gambar logo</label>
		</div>
	);
}

export default Image;