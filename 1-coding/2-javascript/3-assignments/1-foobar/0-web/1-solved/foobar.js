
/**
 * function that returns an array of values following foo-bar rules:
 *  - if the number is divisible by 3, add 'foo'
 *  - if the number is divisible by 5, add 'bar'
 *  - if the number is divisible by both 3 and 5, add 'foobar'
 *  - otherwise, add the number
 * 
 * @returns { [] } 
 */
function foobar(num) {
	const numArray = [...Array(num)].map((_, index) => index + 1);
    
	return numArray.map(num => {
		if (num % 15 === 0) {
			return 'foobar';
		} else if (num % 3) {
			return 'foo';
		} else if (num % 5) {
			return 'bar';
		} else {
			return num;
		}
	});
}
console.log(foobar(15));