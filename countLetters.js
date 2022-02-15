//counts the amount of times letters appear in strings
const countLetters = function(str) {
  const results = {};
  const noSpace = str.replace(/\s/g, '');
  const input = noSpace.toLowerCase();
  for (const letter of input) {
    if (results[letter]) {
      results[letter]++;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};
module.exports = countLetters;
