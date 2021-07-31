
/**
 * Promises
 * 
 * Promises is an abstraction that overlays a function. They can be used to chain togethor functions
 */

const timeoutPromise = time => new Promise(resolve => setTimeout(() => resolve(), time));


timeoutPromise(2000).then(() => {
	console.log('print after 2 seconds');
});

/**
 * when the function in a promise returns another promise, we can use .then() to chain together a
 * series of calls
 */

timeoutPromise(10000).then(() => {
	console.log('print after 10 seconds');
	return timeoutPromise(1000);
}).then(() => {
	console.log('prints after 11 seconds total, or 1 second after last promise');
});

