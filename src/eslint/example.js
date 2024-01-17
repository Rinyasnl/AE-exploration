
const name = 'John';

console.log('Hello, ' + name);

const numbers = [1, 2, 3, 4];

numbers.forEach(number => {
    console.log(number);
});

function add(a, b) {
    return a + b;
}

add(5, 10);


const x = 5;  // Missing semicolon

function sayHello() {
    console.log("Hello, world!");
}

// Unused variable
const unusedVariable = "This variable is not used in the code";

// Inconsistent indentation
if (x > 3) {
    console.log("x is greater than 3");
} else {
    console.log("x is not greater than 3");
}

// Trailing whitespace at the end of the line 
const trailingWhitespace = "This line has trailing whitespace. ";

// Missing space after the function keyword
const add = function (a, b) {
    return a + b;
};

add(3, 5);
