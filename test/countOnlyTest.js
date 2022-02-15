const countOnly = require('../index').countOnly;
const assert = require('chai').assert;

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
  })
})
/*
//test case
const firstNames = [
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

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
*/