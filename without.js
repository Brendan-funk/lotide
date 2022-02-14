const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1,arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
    return;
  }
  console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
  
};

const without = function(arr,arr2) {
  let output = [];
  let isNotWanted = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr[i] === arr2[j]) {
        isNotWanted = true;
      }
    }
    if (isNotWanted) {
      output.push(arr[i]);
    }
    isNotWanted = false;
  }
  
  return output;
};
module.exports = without;
//test cases
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

