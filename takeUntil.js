//goes through an array pushing items into a new array until the condition of the callback is met
const takeUntil = function(array,func) {
  let output = [];
  for (const element of array) {
    if (func(element)) {
      return output;
    }
    output.push(element);
  }
  return output;
};
module.exports = takeUntil;
