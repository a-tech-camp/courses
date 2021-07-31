
/**
 * 
 * @param number num - 
 */
function fibonacci(num) {
	switch (num) {
	case 0:
	case 1:
		return num;
	default:
		return fibonacci(num - 1) + fibonacci(num - 2);
	}
}

const range8 = [...new Array(9)].map((_, index) => index);

const first7Fibonacci = range8.map(fibonacci); // passing as a high-order function
// const first7Fibonacci = range8.map(num => fibonacci(num)); // alternative way to write ^

console.log(first7Fibonacci);
// [ 0, 1, 1, 2, 3, 5, 8, 13, 21 ]
