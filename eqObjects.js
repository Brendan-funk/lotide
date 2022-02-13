const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
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
      return true;
    }
    if (typeof(obj1[key]) === 'object' && typeof(obj2[key]) === 'object') {
      if (!eqObjects(obj1[key],obj2[key])) {
        return false;
      }
      return true;
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

//test cases
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),true);
const abc = {a: '1', b: '2', c: '3'};
assertEqual(eqObjects(ab,abc),false);
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true);
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false);

const objOne = {
  nested: {
    a: 1,
    b: 2
  },
  c: 3
};
const objTwo = {
  nested: {
    a: 1,
    b: 2
  },
  c: 3
};
assertEqual(eqObjects(objOne,objTwo),true);


