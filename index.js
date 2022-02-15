const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');
const assertEqual = require('./assertEqual');
const assertArrayEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
module.exports = {
  eqArrays,
  eqObjects,
  head,
  tail,
  middle,
  countOnly,
  countLetters,
  findKey,
  findKeyByValue,
  flatten,
  letterPositions,
  map,
  takeUntil,
  without,
  assertArrayEqual,
  assertEqual,
  assertObjectsEqual
};