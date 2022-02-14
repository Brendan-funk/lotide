const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');


//test cases
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", ["2", "3"]], ["1", ["2", "3"]]); // => true
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS