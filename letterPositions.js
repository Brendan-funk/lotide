//returns an object of all the positions a letter has shown up in a string
const letterPositions = function(str) {
  const results = {};
  for (let i = 0; i < str.length; i ++) {
    if (str.charAt(i) !== ' ') {
      if (results[str.charAt(i)]) {
        results[str.charAt(i)].push(i);
      } else {
        results[str.charAt(i)] = [i];
      }
    }
  }
  return results;
};
module.exports = letterPositions;
