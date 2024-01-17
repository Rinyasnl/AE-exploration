// Function with explicit types for parameters and return value
function add3(x: number, y: number): number {
    return x + y;
  }
  
  // Function with optional parameter
  function greet3(name: string, greeting?: string): void {
    if (greeting) {
      console.log(`${greeting}, ${name}!`);
    } else {
      console.log(`Hello, ${name}!`);
    }
  }
  
  // Function with default parameter
  function welcome(name: string, greeting: string = "Welcome"): void {
    console.log(`${greeting}, ${name}!`);
  }
  
  // Function with rest parameter
  function sumAll(...numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
  
  // Function with callback
  function fetchData(callback: (data: string) => void): void {
    // Simulate fetching data asynchronously
    setTimeout(() => {
      const data = "Fetched data";
      callback(data);
    }, 1000);
  }
  
  // Function with overloaded types
  function multiply(value: number): number;
  function multiply(value: string, multiplier: number): string;
  function multiply(value: number | string, multiplier?: number): number | string {
    if (typeof value === "number") {
      return value * (multiplier || 1);
    } else {
      return Array(multiplier || 1).fill(value).join(" ");
    }
  }
  
  // Function with arrow syntax
  const square = (x: number): number => x * x;
  
  // Function with generic type
  function identity<T>(arg: T): T {
    return arg;
  }
  
  // Usage of functions
  const result1 = add3(3, 5);
  greet3("John");
  welcome("Alice");
  const total = sumAll(1, 2, 3, 4, 5);
  fetchData((data) => console.log(`Fetched data: ${data}`));
  const product = multiply(4);
  const repeatedString = multiply("hello", 3);
  const squaredValue = square(4);
  const identityResult = identity<string>("TypeScript");
  
  console.log(result1, total, product, repeatedString, squaredValue, identityResult);
  