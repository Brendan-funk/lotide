//returns new array without the matching terms
const without = function(arr,arr2) {
  let output = [];
  let isNotWanted = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr[i] === arr2[j]) {
        isNotWanted = true;
      }
    }
    if (!isNotWanted) {
      output.push(arr[i]);
    }
    isNotWanted = false;
  }
  
  return output;
};
module.exports = without;



