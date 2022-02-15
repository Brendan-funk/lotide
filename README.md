# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @brendanzfunk/lotide`

**Require it:**

`const _ = require('@brendanzfunk/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArrayEqual(array,array)`: console logs the result of eqArrays
* `assertEqual(value,value)`: checks if two things are equal and console logs the output
* `assertObjectsEqual(object,object)`: console.logs the output of eqObjects
* `countLetters(string)`: counts the amount of times letters appear in a string
* `countOnly(object,object)`: counts values in an object, only what is specified
* `eqArrays(array,array)`: check if arrays are equal
* `eqObjects(object,object)`: checks if two objects are equal
* `findKey(object,function)`: finds the key of an object based on a callback function
* `findKeyByValue(object,value)`: returns the key of an object by its value
* `flatten(array)`: takes a multi dimensional array and condenses it into traditional array
* `head(array)`: gets the first element of an array
* `letterPositions(string)`: returns an object of all the positions a letter has shown up in a string
* `map(array,function)`: loops through an array pushing items into a new array based on callback function
* `middle(array)`: get middle values of an array
* `tail(array)`: returns an array of everything but the head of the array
* `takeUntil(array,function)`: goes through an array pushing items into a new array until the condition of the callback is met
* `without(array,array)`: returns new array without the matching terms in the second array