// Write a function named sumEvenNumbers, taking a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// Input
// sequence of numbers: those numbers could be integers and/or floats.
// For example, considering this input value : [4,3,1,2,5,10,6,7,9,8], then your function should return 30 (because 4 + 2 + 10 + 6 + 8 = 30).

function sumEvenNumbers(input) {
  return input
    .filter((el) => !(el % 2))
    .reduce((ac, el) => {
      return ac + el;
    }, 0);
}

console.log(sumEvenNumbers([4, 3, 1, 2, 5, 10, 6, 7, 9, 8]));

// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

function myLanguages(results) {
  const final = [];

  for (let key in results) {
    if (results[key] >= 60) final.push(key);
  }

  return final.sort((a, b) => results[b] - results[a]);
}

console.log(myLanguages({ Hindi: 60, Dutch: 93, Greek: 71 }));

// Task
// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.

// Example
// 25  =>  25 + 12 + 6 + 3 + 1 = 47

function halvingSum(n) {
  let number = n;
  let numberArray = [];
  while (number >= 1) {
    numberArray.push(number);
    number = Math.floor(number / 2);
  }

  return numberArray.reduce((a, c) => a + c, 0);
}

console.log(halvingSum(25));

// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"
function divisors(integer) {
  //make an array to store value
  //get the modulo result and push it to the array
  //check for emty array.
  //if it is emplty return string written as a prime

  const resultArray = [];

  for (let index = 2; index <= Math.floor(integer / 2); index++) {
    if (integer % index === 0) {
      resultArray.push(index);
    }
  }

  if (resultArray.length === 0) {
    return `${integer} is prime`;
  }

  return resultArray;
}

console.log(divisors(12));
