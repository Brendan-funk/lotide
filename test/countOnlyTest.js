const countOnly = require('../index').countOnly;
const assert = require('chai').assert;

//-----------TEST CODE----------//
describe('#countOnly', () => {

  it('should return an object with the counts of names given in an array specified from an object' , () => {
    const names = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const toCount = {
      'Jason': true,
      'Karima': true,
      'Fang': true,
      'Agouhanna': false,
    };
    const output = countOnly(names,toCount);
    const expectedOutput = {
      'Jason': 1,
      'Fang': 2,
    };
    assert.deepEqual(output,expectedOutput);
  });
});