const { without } = require('../index');
const assert = require('chai').assert;

//-----------TEST CODE----------//
describe('#without', () => {

  it('should return [2,3] when given the two arrays [1,2,3] and [1]', () => {
    const results = without([1,2,3],[1]);
    const expectedOutput = [2,3];
    assert.deepEqual(results,expectedOutput);
  });

  it('should not tamper with the original array', () => {
    const input = [1,2,3];
    without(input,[1]);
    const expectedOutput = [1,2,3];
    assert.deepEqual(input,expectedOutput);
  });
});