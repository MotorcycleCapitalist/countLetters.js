/*
// function implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }
  }
 */
const countLetters = function (letters) {
  let returnedLetters = {} //creates an object
  for (let letter of letters) {
    if (returnedLetters[letter]) {
      returnedLetters[letter] += 5
    } else {
      returnedLetters[letter] = 5
    }
    //return returnedLetters
  }
  console.log(returnedLetters)
}
countLetters('LHL')
