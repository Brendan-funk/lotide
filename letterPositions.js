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

const letterPositions = function(str) {
  const results = {};
  for (let i = 0; i < str.length; i ++) {
    if (str.charAt(i) !== ' ') {
      if (results[str.charAt(i)]) {
        results[str.charAt(i)].push(i);
      }
      results[str.charAt(i)] = [i];
    }
  }
  return results;
};
module.exports = letterPositions;
//test case
const test = letterPositions('lighthouse in the house');
assertArrayEqual(test['l'],[0]);
assertArrayEqual(test['h'],[3,5,15,18]);