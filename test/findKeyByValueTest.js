const { findKeyByValue } = require('../index');
const assert = require('chai').assert;

//-----------TEST CODE----------//
describe('#findKeyByValue', () => {
  it('should return the key that matches the specified value', () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const result = findKeyByValue(bestTVShowsByGenre, "The Wire");
    const expectedOutput = 'drama';
    assert.strictEqual(result,expectedOutput);
  });

  it('should return the undefined if no key matches the specified value', () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const result = findKeyByValue(bestTVShowsByGenre, "Breaking Bad");
    const expectedOutput = undefined;
    assert.strictEqual(result,expectedOutput);
  });
});
