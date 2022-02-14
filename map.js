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

const map = function(arr,func) {
  const results = [];
  for (let item of arr) {
    results.push(func(item));
  }
  return results;
};
module.exports = map;
//test cases
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const expectedOutput1 = ['g','c','t','m','t'];
assertArrayEqual(results1,expectedOutput1);


const names = ['ethan','brendan','ralph'];
const results2 = map(names,word => word.length === 5);
const expectedOutput2 = [true,false,true];
assertArrayEqual(results2,expectedOutput2);


const greetings = ['hello', 'hola' , 'bonjour'];
const results3 = map(greetings,word => word.length);
const expectedOutput3 = [5,4,7];
assertArrayEqual(results3,expectedOutput3);