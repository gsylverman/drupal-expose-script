 import React, { useEffect, useState } from 'react';
 import ReactDOM from 'react-dom/client';

 const App = () => {
	const [nr, setNr] = useState(0);

	useEffect(() => {
		const fetchPhysicalProducts = async() => {
			const resp = await fetch('http://127.0.0.1:39599/jsonapi/commerce_product/physical');
			const {data} = await resp.json();

			console.log(data);
		}
		fetchPhysicalProducts();

	}, [])

	return (
		<>
		<div>{nr}</div>
			<button className='btn btn-primary btn-lg' onClick={() => setNr(nr=>nr+1)} >+</button>
			<button className='btn btn-primary btn-lg' onClick={() => setNr(nr=>nr-1)} >-</button>
			<div>hello form react app</div>
		</>
	)
 }

document.addEventListener('DOMContentLoaded', function() {
	const container = document.querySelector('div[data-quickedit-field-id="block_content/18/body/en/full"]');

	const root = ReactDOM.createRoot(container);
root.render(<App />);
});

