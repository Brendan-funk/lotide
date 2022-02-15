const assert = require('chai').assert;
const eqArrays = require('../index').eqArrays;


//test cases
/*
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", ["2", "3"]], ["1", ["2", "3"]]); // => true

*/

describe('#eqArray', () => {

  it('should return true if given [1,2,3] and [1,2,3];', () => {
    assert.strictEqual(eqArrays([1,2,3],[1,2,3]),true);
  });

  it('should return false if given [1,2,3] and [3,2,1]', () => {
    assert.strictEqual(eqArrays([1,2,3],[3,2,1]),false);
  });

  it('should return true if given ["1","2","3"] and ["1","2","3"]', () => {
    assert.strictEqual(eqArrays(['1','2','3'],['1','2','3']),true);
  });

  it('should return true if given nested equal arrays', () => {
    const arr1 = [[1,2],3];
    const arr2 = [[1,2],3];
    const output = eqArrays(arr1,arr2);
    assert.strictEqual(output,true);
  });

  it('should return false if given nested unequal arrays', () => {
    const arr1 = [[1,2],3];
    const arr2 = [[1,2],3,4];
    const output = eqArrays(arr1,arr2);
    assert.strictEqual(output,false);
  });
})