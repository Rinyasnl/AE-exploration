// Array destructuring
const numbers = [1, 2, 3];
const [first, second, third] = numbers;

// Object destructuring
const person = { name: 'John', age: 30 };
const { name, age } = person;

const firstname = 'Alice';
const greeting = `Hello, ${firstname}!`;

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

// Rest operator
const sum = (a, b, ...rest) => a + b + rest.reduce((acc, val) => acc + val, 0);

function example() {
    if (true) {
      let x = 10;
      console.log(x); // 10
    }
    // console.log(x); // Error: x is not defined
  }
  
  // Constant (const)
  const PI = 3.14159;
  // PI = 3; // Error: Assignment to constant variable

  // Traditional function
function add(a, b) {
    return a + b;
  }
  
  // Arrow function
  const addArrow = (a, b) => a + b;

  // Default parameters
function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
  }
  
  greet(); // Hello, Guest
  greet('John'); // Hello, John

  const nam = 'Alice';
const age1 = 25;

const message = `Hello, my name is ${nam} and I'm ${age1} years old.`;
console.log(message);

const number = 123456.789;

console.log(new Intl.NumberFormat('en-US').format(number)); // 123,456.789
console.log(new Intl.NumberFormat('de-DE').format(number)); // 123.456,789

// Array.from
const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
const newArray = Array.from(arrayLike);
console.log(newArray); // ['a', 'b', 'c']

// String.includes
const str = 'Hello, World!';
console.log(str.includes('World')); // true

const buffer = new ArrayBuffer(16);
const int32View = new Int32Array(buffer);

int32View[0] = 42;
console.log(int32View[0]); // 42
