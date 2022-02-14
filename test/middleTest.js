const middle = require('../middle');
const assert = require('chai').assert;

//-----------TEST CODE----------//
describe('#middle', () => {

  it('should return [] when given [1]', () => {
    const input = [1];
    const expectedOutput = [];
    assert.deepEqual(middle(input),expectedOutput);
  });

  it('should return [] when given [1,2]', () => {
    const input = [1,2];
    const expectedOutput = [];
    assert.deepEqual(middle(input),expectedOutput);
  });

  it('should return [2] when given [1,2,3]', () => {
    const input = [1,2,3];
    const expectedOutput = [2];
    assert.deepEqual(middle(input),expectedOutput);
  });

  it('should return [3] when given [1,2,3,4,5]', () => {
    const input = [1,2,3,4,5];
    const expectedOutput = [3];
    assert.deepEqual(middle(input),expectedOutput);
  });

  it('should return [2,3] when given [1,2,3,4]', () => {
    const input = [1,2,3,4];
    const expectedOutput = [2,3];
    assert.deepEqual(middle(input),expectedOutput);
  });

  it('should return [3,4] when given [1,2,3,4,5,6]', () => {
    const input = [1,2,3,4,5,6];
    const expectedOutput = [3,4];
    assert.deepEqual(middle(input),expectedOutput);
  });
})