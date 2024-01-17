// Example 1: Doubling each element in an array
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Example 2: Converting Fahrenheit temperatures to Celsius
const fahrenheitTemps = [32, 68, 86, 104];
const celsiusTemps = fahrenheitTemps.map((f) => ((f - 32) * 5) / 9);
console.log(celsiusTemps); // Output: [0, 20, 30, 40]

// Example: Filtering even numbers from an array
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = num.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

//  Summing up elements in an array
const n = [1, 2, 3, 4, 5];
const sum = n.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

// Concatenating strings in an array
const words = ['Hello', ' ', 'World', '!'];
const sentence = words.reduce((accumulator, currentWord) => accumulator + currentWord, '');
console.log(sentence); // Output: 'Hello World!'

