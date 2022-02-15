const { letterPositions } = require('../index');
const assert = require('chai').assert;

//-----------TEST CODE----------//
describe('#letterPositions', () => {

  it('should return an object with all the unique letters and their positions in the string', () => {
    const string = 'lighthouse in the house';
    const results = letterPositions(string);
    const expectedOutput = {
      l: [0],
      i: [1, 11],
      g: [2],
      h: [3, 5, 15, 18],
      t: [4, 14],
      o: [6, 19],
      u: [7, 20],
      s: [8, 21],
      e: [9, 16, 22],
      n: [12]
    };
    assert.deepEqual(results,expectedOutput);
  });

  it('should return empty object when given empty string', () => {
    const string = '';
    const results = letterPositions(string);
    const expectedOutput = {};
    assert.deepEqual(results,expectedOutput);
  });
});
