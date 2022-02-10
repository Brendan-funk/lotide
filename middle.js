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
    return;
  }
  console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
};

//get middle values of an array
const middle = function(arr) {

  let output = [];
  let middleIndex = Math.floor(arr.length / 2);

  if (arr.length <= 2) {
    return output;
  }
  output.push(arr[middleIndex]);
  if (arr.length % 2 === 0) {
    output.unshift(arr[middleIndex] - 1);
  }
  return output;
};

assertArrayEqual(middle([1]), []);
assertArrayEqual(middle([1, 2]), []);

assertArrayEqual(middle([1,2,3]),[2]);
assertArrayEqual(middle([1,2,3,4,5]),[3]);

assertArrayEqual(middle([1,2,3,4]),[2,3]);
assertArrayEqual(middle([1,2,3,4,5,6]),[3,4,]);