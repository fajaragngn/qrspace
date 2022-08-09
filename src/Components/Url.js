function Url({ url, setUrl, httpRgx }) {
	const handleUrl = e => setUrl(e.target.value),
			handleClearUrl = () => setUrl('');
	
	const handleValidateUrl = () => {
		if(url && !httpRgx.test(url)) {
			setUrl('http://'+url);
		}
	}

	return(
		<div className="mt-5" >
			<label htmlFor="url">Masukkan URL</label>
			
			<input
                className="px-1 py-3 pt-1 pb-1 border border-white-600 shadow-lg max-w-3xl"
				id="url"
				name="url"
				type="text"
				value={url}
				onChange={handleUrl}
				onBlur={handleValidateUrl}
				placeholder="Ex : awikwok.com"
				required
			/>
			
			{url &&
				<button className="clear-btn" onClick={handleClearUrl}>x</button>
			}
		</div>
	);
}

export default Url;