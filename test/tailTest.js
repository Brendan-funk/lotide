const tail = require('../index').tail;
const assert = require('chai').assert;

//-----------TEST CODE----------//
describe('#tail', () => {

  it('not change the original array', () => {
    const words = ["Yo Yo", 'Lighthouse', 'Labs'];
    tail(words);
    assert.strictEqual(words.length,3);
  });

  it('should return ["Lighthouse","Labs"] when given ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const words = ["Yo Yo", 'Lighthouse', 'Labs'];
    const expectedOutput = ['Lighthouse','Labs'];
    const output = tail(words);
    assert.deepEqual(output,expectedOutput);
  });
});