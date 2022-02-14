
//get middle values of an array
const middle = function(arr) {

  let output = [];
  let middleIndex = Math.floor(arr.length / 2);

  if (arr.length <= 2) {
    return output;
  }
  output.push(arr[middleIndex]);
  if (arr.length % 2 === 0) {
    output.unshift(arr[middleIndex] - 1);
  }
  return output;
};
module.exports = middle;
