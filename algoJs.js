// We need the ability to divide an unknown integer into a given number of even parts — or at least as even as they can be.
//ifThe sum of the parts should be the original value, but each part should be an integer, and they should be as close as possible.
// Example code:
// splitInteger(20, 6)  // returns [3, 3, 3, 3, 4, 4]
// Complete the function so that it returns an array of integer representing the parts.
//Ignoring the order of the parts, there is only one valid solution for each input to your function!
// (Also, there is no reason to test for edge cases: the input to your function will always be valid for this kata.)

function splitInteger(num, parts) {
  //get modulo
  //get the int vallue deviding buy num/parts
  //make one array of that int - the rmainder
  //make another one with remainder element size and add int+1 element.
  const remainder = num % parts;
  const int = Math.floor(num / parts);

  const newArray = new Array(parts - remainder).fill(int);
  const secondArray = new Array(remainder).fill(int + 1);
  return [...newArray, ...secondArray];
}
console.log(splitInteger(20, 6));

// The objective is to return all pairs of integers from a given collection of integers that have a difference of 2.

// The result should be sorted in ascending order.

// The input will consist of unique values. The order of the integers in the input collection should not matter.

// Examples
// [1, 5, 2, 4]      -->  [[1, 3], [2, 4]]
// [4, 1, 2, 3]      -->  [[1, 3], [2, 4]]
// [1, 23, 3, 4, 7]  -->  [[1, 3]]
// [4, 3, 1, 5, 6]   -->  [[1, 3], [3, 5], [4, 6]]
//[1,5,6,7,9]
function twosDifference(input) {
  //SORT THE ARRAY
  //DO SUBRTACTION OF CONSECUTIVE ELEMETS
  //CHECK THE DIFFERENCE IF LESS THAN 2 CHECK FOR NEXT ELEMENT
  //IF MATCH STORE PAIR IN TO ARRAY

  // let sortedArray = input.sort((a, b) => a - b);
  // const finalArray = [];
  // for (let i = 0; i < sortedArray.length; i++) {
  //   for (let j = i + 1; j < sortedArray.length; j++) {
  //     if (sortedArray[j] - sortedArray[i] === 2) {
  //       finalArray.push(new Array(sortedArray[i], sortedArray[j]));
  //       break;
  //     }
  //   }
  // }
  let array = input
    .sort(function (a, b) {
      return a - b;
    })
    .filter(function (a) {
      return input.indexOf(a + 2) != -1;
    });

  console.log(array);

  let finalArray = array.map(function (a) {
    return [a, a + 2];
  });

  return finalArray;
  //////////////////////////////another method////////////////
  input.sort((a, b) => a - b);
  var arr = [];
  for (var i = 0; i < input.length; ++i)
    if (input.indexOf(input[i] + 2) != -1) {
      arr.push([input[i], input[i] + 2]);
    }
  return arr;

  return finalArray;
}

console.log(twosDifference([1, 5, 6, 7, 9]));

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
