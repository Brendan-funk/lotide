const { map } = require('../index');
const assert = require('chai').assert;

//-----------TEST CODE----------//
describe('#map', () => {

  it(`should return an array of the first letter of each word when given an array of words and the function word => word[0]`, () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results = map(words, word => word[0]);
    const expectedOutput = ['g','c','t','m','t'];
    assert.deepEqual(results,expectedOutput);
  });

  it('should return an array of booleons when given an array of names and the function word.length === 5', () => {
    const names = ['ethan','brendan','ralph'];
    const results = map(names,word => word.length === 5);
    const expectedOutput = [true,false,true];
    assert.deepEqual(results,expectedOutput);
  });

  it('should return an array of lengths of words when given an array of words and the function of word.length', () => {
    const greetings = ['hello', 'hola' , 'bonjour'];
    const results = map(greetings,word => word.length);
    const expectedOutput = [5,4,7];
    assert.deepEqual(results,expectedOutput);
  });
});