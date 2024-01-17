// Boolean Type
var isDone = false;
// Number Types
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// String Type
var color = "blue";
var fullName = "John Doe";
// Array Type
var list = [1, 2, 3];
var fruits = ["apple", "banana", "orange"];
// Tuple Type
var tuple = ["hello", 10];
// Enum Type
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var colorEnum = Color.Green;
// Any Type
var notSure = 4;
notSure = "maybe a string";
notSure = false;
// Void Type
function logMessage() {
    console.log("This is a log message");
}
// Null and Undefined
var nullValue = null;
var undefinedValue = undefined;
// Union Type
var unionType = "hello";
unionType = 42;
// Literal Type
var literalType = "red";
// Object Type
var person = {
    name: "John",
    age: 30,
};
// Function Type
var add1 = function (a, b) {
    return a + b;
};
var point = { x: 10, y: 20 };
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}());
// Generics
function identity(arg) {
    return arg;
}
var result = identity(42);
// Type Assertion
var stringValue = "This is a string";
var strLength = stringValue.length;
// Non-null Assertion Operator
var nonNullValue;
nonNullValue = "This is a non-null value";
console.log(nonNullValue);
