(async function() {
	const url = 'https://www.googleapis.com/books/v1/volumes?q=search+terms';

	const response = await fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
	});

	const json = await response.json();
	console.log(json);
	// TODO append json
})();
