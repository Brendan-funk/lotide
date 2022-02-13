const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    console.log('error here');
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if(Array.isArray(arr1[i]) && Array.isArray(arr2[i])){ 
      if (!eqArrays(arr1[i],arr2[i])) {
        console.log(here);
        return false;
      }
      return true;
    }
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

//test cases

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", ["2", "3"]], ["1", ["2", "3"]])); // => true

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
