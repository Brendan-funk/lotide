//returns the key of an object by its value
const findKeyByValue = function(obj,value) {
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
};
module.exports = findKeyByValue;
