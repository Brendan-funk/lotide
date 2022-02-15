const {flatten} = require('../index');
const assert = require('chai').assert;

//-----------TEST CODE----------//
describe('#flatten' , () => {

  it('should return a [1,2,3,4,5,6] when given [1,2,[3,4].[5,[6]]]', () => {
    const input = [1,2,[3,4],[5,[6]]];
    const expectedOutput = [1,2,3,4,5,6];
    const results = flatten(input);
    assert.deepEqual(results,expectedOutput);
  });

  it('should return an empty array when given []', () => {
    const input = [];
    const expectedOutput = [];
    const results = flatten(input);
    assert.deepEqual(results,expectedOutput);
  });
});
