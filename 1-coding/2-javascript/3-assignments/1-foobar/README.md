# Foo Bar

Foo and Bar are generic variable names. You will find that it's difficult to come up with variable names

## The problem
We are given a the postive numbers and we map them by the following rules:

Write a function called foobar that takes in a value n and outputs an array based on the following rules:
 - if the number is divisible by 3, add 'foo'
 - if the number is divisible by 5, add 'bar'
 - if the number is divisible by both 3 and 5, add 'foobar'
 - otherwise, add the number

## Starter
```js
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
    // add code here
}
```

## Example 
```js
foobar(20);
```
should return
```js
[
    1,
    2,
    'foo',
    4,
    'bar',
    'foo',
    7,
    8,
    'foo',
    'bar',
    11,
    'foo',
    13,
    14,
    'foobar',
    16,
    17,
    'foo',
    19,
    'bar'
]
```

## Execution
### Web
Open the corresponding `index.html` file