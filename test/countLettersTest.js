const countLetters = require('../index').countLetters;
const assert = require('chai').assert;


describe('#countLetters', () => {

  it('should return an object matching {l:1, i:2, g:1, h:4, t:2, o:2, u:2, s:2, e:3, i:1} when given the string "lighthouse in the house"', () => {
    const string = 'Lighthouse in the house';
    const expectedOutput = {
      e: 3,
      g: 1,
      h: 4,
      i: 2,
      l: 1,
      n: 1,
      o: 2,
      s: 2,
      t: 2,
      u: 2,
    };
    const output = countLetters(string);
    assert.deepEqual(output,expectedOutput);
  })
})