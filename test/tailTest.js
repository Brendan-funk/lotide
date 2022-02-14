const tail = require('../tail');
const assertEqual = require('../assertEqual');

//test cases
const words = ["Yo Yo", "Lighthouse", "Labs"];
const output = tail(words);
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(output.length,2);