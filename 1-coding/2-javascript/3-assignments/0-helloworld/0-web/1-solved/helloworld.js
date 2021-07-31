
/**
 * function that greets the name passed in. If no name is passed in it greets 'world'
 * @returns { string } 
 */
function greet(name = 'world') {
	return 'hello ' + name;
}


console.log(greet());
console.log(greet('class'));