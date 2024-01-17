// Arrays
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits); // Output: ['apple', 'banana', 'orange']

// Accessing array elements
console.log(fruits[0]); // Output: 'apple'

// Modifying array elements
fruits[1] = 'grape';
console.log(fruits); // Output: ['apple', 'grape', 'orange']

// Array methods
fruits.push('kiwi');
console.log(fruits); // Output: ['apple', 'grape', 'orange', 'kiwi']

// Objects
let person = {
    firstName: 'Ram',
    lastName: 'D',
    age: 30,
    address: {
        city: 'New York',
        zipCode: '10001'
    },
    greet: function () {
        console.log(`Hello, ${this.firstName} ${this.lastName}!`);
    }
};

console.log(person.firstName); // Output: 'Ram'
console.log(person.address.city); // Output: 'New York'
person.greet(); // Output: 'Hello, Ram D!'

// Scopes
function outerFunction() {
    let outerVariable = 'I am outer';

    function innerFunction() {
        let innerVariable = 'I am inner';
        console.log(outerVariable); // Output: 'I am outer'
        console.log(innerVariable); // Output: 'I am inner'
    }

    innerFunction();
    // console.log(innerVariable); // This would result in an error (not defined)
}

outerFunction();

// Closures
function outerClosure() {
    let outerVar = 'I am outer';

    function innerClosure() {
        let innerVar = 'I am inner';
        console.log(`${outerVar}, ${innerVar}`);
    }

    return innerClosure;
}

let closureFunction = outerClosure();
closureFunction(); // Output: 'I am outer, I am inner'
