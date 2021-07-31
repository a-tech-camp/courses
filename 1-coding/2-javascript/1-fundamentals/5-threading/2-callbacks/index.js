
/**
 * the old way of writing asyncronous code was through callbacks.
 * Here we pass in a function that should be called when a promise resolved
 */
setTimeout(() => {
	console.log('called after 10 seconds');
	setTimeout(() => {
		console.log('prints after 11 seconds total, or 1 second after last promise');
	}, 1000);
}, 10000);