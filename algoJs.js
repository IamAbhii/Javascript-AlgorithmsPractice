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
