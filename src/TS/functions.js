// Function with explicit types for parameters and return value
function add(x, y) {
    return x + y;
}
// Function with optional parameter
function greet(name, greeting) {
    if (greeting) {
        console.log("".concat(greeting, ", ").concat(name, "!"));
    }
    else {
        console.log("Hello, ".concat(name, "!"));
    }
}
// Function with default parameter
function welcome(name, greeting) {
    if (greeting === void 0) { greeting = "Welcome"; }
    console.log("".concat(greeting, ", ").concat(name, "!"));
}
// Function with rest parameter
function sumAll() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (sum, num) { return sum + num; }, 0);
}
// Function with callback
function fetchData(callback) {
    // Simulate fetching data asynchronously
    setTimeout(function () {
        var data = "Fetched data";
        callback(data);
    }, 1000);
}
function multiply(value, multiplier) {
    if (typeof value === "number") {
        return value * (multiplier || 1);
    }
    else {
        return Array(multiplier || 1).fill(value).join(" ");
    }
}
// Function with arrow syntax
var square = function (x) { return x * x; };
// Function with generic type
function identity(arg) {
    return arg;
}
// Usage of functions
var result1 = add(3, 5);
greet("John");
welcome("Alice");
var total = sumAll(1, 2, 3, 4, 5);
fetchData(function (data) { return console.log("Fetched data: ".concat(data)); });
var product = multiply(4);
var repeatedString = multiply("hello", 3);
var squaredValue = square(4);
var identityResult = identity("TypeScript");
console.log(result1, total, product, repeatedString, squaredValue, identityResult);
