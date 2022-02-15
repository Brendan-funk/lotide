//finds the key of an object value
const findKey = function(obj,func) {
  for (const key in obj) {
    if (func(obj[key])) {
      return key;
    }
  }
  return undefined;
};
module.exports = findKey;
