function Url({ url, setUrl, httpRgx }) {
	const handleUrl = e => setUrl(e.target.value),
			handleClearUrl = () => setUrl('');
	
	const handleValidateUrl = () => {
		if(url && !httpRgx.test(url)) {
			setUrl('http://'+url);
		}
	}

	return(
		<div>
			<label htmlFor="url">Enter your URL</label>
			
			<input
                className="pl-3"
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