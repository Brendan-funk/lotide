const { takeUntil } = require('../index');
const assert = require('chai').assert;

//-----------TEST CODE----------//
describe('#takeUntil', () => {

  it('should return [1,2,5,7,2] when given the array [1,2,5,7,2,-1,2,4,5] and the function x < 0', () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, x => x < 0);
    const expectedOutput = [1,2,5,7,2];
    assert.deepEqual(results1,expectedOutput);
  });

  it('should return ["Ive","been","to","hollywood" when given the array ["Ive", "been", "to", "Hollywood", ",", "Ive", "been", "to", "Redwood"] and the function x === ,', () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = takeUntil(data2, x => x === ',');
    const expectedOutput = ["I've","been","to","Hollywood"];
    assert.deepEqual(results2,expectedOutput);
  });
});
