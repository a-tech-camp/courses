
/**
 * Documents and Windows
 * 
 * Document - The DOM (Document object Model) of a web-page. This is the object that contains the HTML tree
 * and is responsible for manipulating it
 * 
 * Window - The Window tells us about the state of the web app. This is often used as below to wait for
 * the web app to be loaded in before any execution happens
 * 
 */
window.onload = () => {

	// query selector
	document.querySelector('.populate').textContent = 'This was populated through javascript';

	const newDiv = document.createElement('div');
	newDiv.textContent = 'nested inside another dive';

	document.querySelector('#mydiv').appendChild(newDiv);
};
