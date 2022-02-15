//takes a multi dimensional array and condenses it into traditional array
const flatten = function(arr) {
  let output = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      const temp = flatten(element);
      for (const e1 of temp) {
        output.push(e1);
      }
    } else {
      output.push(element);
    }
  }
  return output;
};
module.exports = flatten;
