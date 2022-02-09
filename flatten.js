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

const assertArrayEqual = function(arr1,arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const flatten = function(arr) {
  let output = [];

  //loop through array checking if the element is an array
  for (const element of arr) {
    if (Array.isArray(element)) {

      //using recursion get all the values of the nested array and add them to the output
      const temp = flatten(element);
      for (const e1 of temp) {
        output.push(e1);
      }
    } else {
      output.push(element);
    }
  }
  return output;
};

//test cases
console.log(flatten([1,2,[3,4],[5,[6]]]));
assertArrayEqual(flatten([[1, [2,3]],4,5]),[1,2,3,4,5]);