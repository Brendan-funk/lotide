const eqObjects = function(obj1,obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key in obj1) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!eqArrays(obj1[key],obj2[key])) {
        return false;
      }
    }
    if (typeof(obj1[key]) === 'object' && typeof(obj2[key]) === 'object') {
      if (!eqObjects(obj1[key]),obj2[key]) {
        return false;
      }
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

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

const assertObjectsEqual = function(obj1,obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1,obj2)) {
    console.log(`✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
    return;
  }
  console.log(`❌ Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  
};

const a = {
  a:2,
  b:3,
};
const b = {
  b:4,
  a:2,
};

assertObjectsEqual(a,b);