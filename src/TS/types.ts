// Boolean Type
let isDone: boolean = false;

// Number Types
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String Type
let color: string = "blue";
let fullName: string = `John Doe`;

// Array Type
let list: number[] = [1, 2, 3];
let fruits: Array<string> = ["apple", "banana", "orange"];

// Tuple Type
let tuple: [string, number] = ["hello", 10];

// Enum Type
enum Color {
  Red,
  Green,
  Blue,
}
let colorEnum: Color = Color.Green;

// Any Type
let notSure: any = 4;
notSure = "maybe a string";
notSure = false;

// Void Type
function logMessage(): void {
  console.log("This is a log message");
}

// Null and Undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;

// Union Type
let unionType: string | number = "hello";
unionType = 42;

// Literal Type
let literalType: "red" | "green" | "blue" = "red";

// Object Type
let person: { name: string; age: number } = {
  name: "John",
  age: 30,
};

// Function Type
let add1: (x: number, y: number) => number = function (a, b) {
  return a + b;
};

// Type Aliases
type Point = { x: number; y: number };
let point: Point = { x: 10, y: 20 };

// Classes and Interfaces
interface Shape {
  calculateArea(): number;
}

class Circle implements Shape {
  constructor(public radius: number) {}

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

// Generics
function identity1<T>(arg: T): T {
  return arg;
}

const result: number = identity<number>(42);

// Type Assertion
let stringValue: any = "This is a string";
let strLength: number = (stringValue as string).length;

// Non-null Assertion Operator
let nonNullValue!: string;
nonNullValue = "This is a non-null value";

console.log(nonNullValue);
