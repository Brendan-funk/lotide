const {findKey} = require('../index');
const assert = require('chai').assert;

//-----------TEST CODE----------//
describe('#findKey', () => {
  
  it('should return noma from the 2d object given when given the value 2', () => {
    const object = {
      'Blue Hill': { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const callBack = x => x.stars === 2;
    const results = findKey(object,callBack);
    const expectedOutput = 'noma';
    assert.strictEqual(results,expectedOutput);
  });

  it('should return undefined from the 2d object given when nothing matches the value', () => {
    const object = {
      'Blue Hill': { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const callBack = x => x.stars === 4;
    const results = findKey(object,callBack);
    const expectedOutput = undefined;
    assert.strictEqual(results,expectedOutput);
  });
});
