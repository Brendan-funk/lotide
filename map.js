//loops through an array pushing items into a new array based on callback function
const map = function(arr,func) {
  const results = [];
  for (let item of arr) {
    results.push(func(item));
  }
  return results;
};
module.exports = map;