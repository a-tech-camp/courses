
/**
 * async await
 * 
 * Often we need to run code asyncronously, that is wait for something to happen before
 * proceeding. This is most often used for web calls. 
 * 
 * async await works on promises which is addressed in the next section. A promise is a 
 * data structure that will eventually resolve
 * 
 * We specify the function as an asyncronous function and then we are able to use
 * the await keyword within that function
 */

const timeoutPromise = time => new Promise(resolve => setTimeout(() => resolve(), time));


async function quickFunc() {
	await timeoutPromise(1000);
	console.log('finished quick func');
}


async function slowFunc() {
	await timeoutPromise(10000);
	console.log('finished slow func');
}

slowFunc();
quickFunc();


