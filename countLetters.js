const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  const results = {};
  const noSpace = str.replace(/\s/g, '');
  const input = noSpace.toLowerCase();
  for (const letter of input) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }

  }
  return results;
};

//test cases
const test = countLetters('lighthouse in the house');
assertEqual(test['l'],1);
assertEqual(test['i'],2);
assertEqual(test['g'],1);
assertEqual(test['h'],4);
assertEqual(test['t'],2);
assertEqual(test['o'],2);
assertEqual(test['u'],2);
assertEqual(test['s'],2);
assertEqual(test['e'],3);
assertEqual(test['n'],1);