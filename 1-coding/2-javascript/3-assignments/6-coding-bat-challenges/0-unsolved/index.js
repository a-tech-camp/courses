
// Given two int values, return their sum. Unless the two values are the same, then return double their sum

function sumDouble(x) {
	throw Error(`Unimplmented use ${x}`);
}

console.log(sumDouble(1, 2)); // 3
console.log(sumDouble(3, 2)); // 5	
console.log(sumDouble(2, 2)); // 8
console.log(sumDouble(-1, 0)); // -1
console.log(sumDouble(3, 3)); // 12
console.log(sumDouble(0, 0)); // 0
console.log(sumDouble(0, 1)); // 1
console.log(sumDouble(3, 4)); // 7

// Return the number of even ints in the given array. Note: the % "mod" operator computes the remainder, e.g. 5 % 2 is 1.
function countEvens(arr) {
	throw Error(`Unimplmented use ${arr}`);
}

console.log(countEvens([2, 1, 2, 3, 4])); // 3
console.log(countEvens([2, 2, 0])); // 3
console.log(countEvens([1, 3, 5])); // 0	
console.log(countEvens([])); // 0
console.log(countEvens([11, 9, 0, 1])); // 1
console.log(countEvens([2, 11, 9, 0])); // 2	
console.log(countEvens([2])); // 2
console.log(countEvens([2, 5, 12])); // 2

/**
 * 
 * Return true if the group of N numbers at the start and end of the array are the same. For example, with {5, 6, 45, 99, 13, 5, 6}, the ends are the same for n=0 and n=2, and false for n=1 and n=3. You may assume that n is in the range 0..nums.length inclusive.
 *
 * sameEnds([5, 6, 45, 99, 13, 5, 6], 1) → false
 * sameEnds([5, 6, 45, 99, 13, 5, 6], 2) → true
 * sameEnds([5, 6, 45, 99, 13, 5, 6], 3) → false
 */


function sameEnds(arr) {
	throw Error(`Unimplmented use ${arr}`);
}


console.log(sameEnds([5, 6, 45, 99, 13, 5, 6], 1)); // false
console.log(sameEnds([5, 6, 45, 99, 13, 5, 6], 2)); // true	
console.log(sameEnds([5, 6, 45, 99, 13, 5, 6], 3)); // false
console.log(sameEnds([1, 2, 5, 2, 1], 1)); // true	
console.log(sameEnds([1, 2, 5, 2, 1], 2)); // false	
console.log(sameEnds([1, 2, 5, 2, 1], 0)); // true
console.log(sameEnds([1, 2, 5, 2, 1], 5)); // true
console.log(sameEnds([1, 1, 1], 0)); // true
console.log(sameEnds([1, 1, 1], 1)); // true	
console.log(sameEnds([1, 1, 1], 2)); // true
console.log(sameEnds([1, 1, 1], 3)); // true
console.log(sameEnds([1], 1)); // true	
console.log(sameEnds([], 0)); // true
console.log(sameEnds([4, 2, 4, 5], 1)); // false


/**
 * 
 * Return the sum of the numbers in the array, returning 0 for an empty array. 
 * Except the number 13 is very unlucky, so it does not count and numbers that come immediately after a 13 also do not count.
 *
 *
 * sum13([1, 2, 2, 1]) → 6
 * sum13([1, 1]) → 2
 * sum13([1, 2, 2, 1, 13]) → 6 
 */
function sum13(arr) {
	throw Error(`Unimplmented use ${arr}`);
} 

console.log(sum13([1, 2, 2, 1])); // 6
console.log(sum13([1, 1])); // 2
console.log(sum13([1, 2, 2, 1, 13])); // 6
console.log(sum13([1, 2, 13, 2, 1, 13])); // 4
console.log(sum13([13, 1, 2, 13, 2, 1, 13])); // 3
console.log(sum13([])); // 0
console.log(sum13([13])); // 0
console.log(sum13([13, 13])); // 0
console.log(sum13([13, 0, 13])); // 0
console.log(sum13([13, 1, 13])); // 0
console.log(sum13([5, 7, 2])); // 0	
console.log(sum13([5, 13, 2])); // 14
console.log(sum13([0])); // 0	
console.log(sum13([13, 0])); // 0

/**
 * 
 * Consider the leftmost and righmost appearances of some value in an array. 
 * We'll say that the "span" is the number of elements between the two inclusive. 
 * A single value has a span of 1. Returns the largest span found in the given array. (Efficiency is not a priority.)
 * 
 * 
 * maxSpan([1, 2, 1, 1, 3]) → 4
 * maxSpan([1, 4, 2, 1, 4, 1, 4]) → 6
 * maxSpan([1, 4, 2, 1, 4, 4, 4]) → 6
 */

function maxSpan(arr) {
	throw Error(`Unimplmented use ${arr}`);
}

console.log(maxSpan([1, 2, 1, 1, 3])); // 4	
console.log(maxSpan([1, 4, 2, 1, 4, 1, 4])); // 6
console.log(maxSpan([1, 4, 2, 1, 4, 4, 4])); // 6
console.log(maxSpan([3, 3, 3])); // 3	
console.log(maxSpan([3, 9, 3])); // 3	
console.log(maxSpan([3, 9, 9])); // 2
console.log(maxSpan([3, 9])); // 1
console.log(maxSpan([3, 3])); // 2
console.log(maxSpan([])); // 0	
console.log(maxSpan([1])); // 1

/**
 * 
 * Given a non-empty array, return true if there is a place to split the array so that the sum of the numbers on one side is equal to the sum of the numbers on the other side.
 * 
 * Challenge: solve without nested loop
 * 
 * canBalance([1, 1, 1, 2, 1]) → true
 * canBalance([2, 1, 1, 2, 1]) → false
 * canBalance([10, 10]) → true
 */

function canBalance(arr) {
	throw Error(`Unimplmented use ${arr}`);

}

console.log(canBalance([1, 1, 1, 2, 1])); // true
console.log(canBalance([2, 1, 1, 2, 1])); // false
console.log(canBalance([10, 10])); // true	
console.log(canBalance([10, 0, 1, -1, 10])); // true
console.log(canBalance([1, 1, 1, 1, 4])); // true	
console.log(canBalance([2, 1, 1, 1, 4])); // false
console.log(canBalance([2, 3, 4, 1, 2])); // false 
console.log(canBalance([1, 2, 3, 1, 0, 2, 3])); // true
console.log(canBalance([1, 2, 3, 1, 0, 1, 3])); // false
console.log(canBalance([1])); // false
console.log(canBalance([1, 1, 1, 2, 1])); // true

