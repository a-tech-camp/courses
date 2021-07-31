/**
 * Declarative Iteration
 * 
 * In declarative programming patterns, we apply a function onto an array.
 * 
 * In each of these methods, we pass in a function to apply to the array. Usually this is an
 * anonymous functoin, or a function that is never assigned to a variable. 
 */

/**
  * Map
  * 
  * map will produce a one-to-one output. The map takes in one value that is a function
  * The function takes in up to 3 arguments
  *  1 - value at the current index
  *  2 - the current index
  *  3 - the array
  * 
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  */
const zeroToFive = [0, 1, 2, 3, 4, 5];

// here are 3 ways to pass in the function
const zeroToTenEven1 = zeroToFive.map(x => x * 2); // preferred way
const double = function(x) {
	return x * 2;
};
const zeroToTenEven2 = zeroToFive.map(double);
const zeroToTenEven3 = zeroToFive.map(function(x) {
	return x * 2;
});

console.log(zeroToTenEven1); // [ 0, 2, 4, 6, 8, 10 ];
console.log(zeroToTenEven2); // [ 0, 2, 4, 6, 8, 10 ];
console.log(zeroToTenEven3); // [ 0, 2, 4, 6, 8, 10 ];


/**
 * Reduce
 * 
 * Reduce is used when we are changing the number of arguments
 * 
 * The reduce takes in a function and a default value. If the default value is not passed in, it is the
 * first value in an array
 * The function takes in atleast 2 values and up to 4
 *  1 - accumulator - the total product of all iterations before it
 *  2 - currentValue - the next value in the iteration of the array
 *  3 - index - current index
 *  4 - array - reference to the original array
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 */

const sumFirst5 = zeroToFive.reduce((currentTotal, nextNumber) => currentTotal + nextNumber, 0);
console.log(sumFirst5); // 15

const teachers = [{
	_id: 'a',
	name: 'matt',
}, {
	_id: 'b',
	name: 'dave',
}];

const mapIdToTeacher = teachers.reduce((map, model) => {
	map[model._id] = model;
	return map;
}, {});

console.log(mapIdToTeacher);

/**
 * For each
 * If we don't want to return value, we should be using a foreach instead of a map.
 * 
 * This is not exactly a declarative approach as in declarative paradigms, our code 
 * should not have side effects. 
 */

teachers.forEach(model => {
	console.log(model);
});
// is different from
teachers.forEach(console.log); // will output the other 3 arguments

/**
 * More Array functions
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * 
 * Filter: only add include values that return true on filter
 *  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 * 
 * Find: find the first value that returns true in this function
 *  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * 
 * Every: returns true if every value passes this test
 *  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
 */

const evenBelowTen = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ].filter(val => val % 2 === 0);
console.log(evenBelowTen); // [ 0, 2, 4, 6, 8 ]

const firstEvenBelowTen = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ].find(val => val % 2 === 0);
console.log(firstEvenBelowTen); // 0

const isEveryNumberEven = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ].every(val => val % 2 === 0);
console.log(isEveryNumberEven); // false
