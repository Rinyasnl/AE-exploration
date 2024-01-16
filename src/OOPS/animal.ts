// Basic Variable Declaration
let message: string = 'Hello, TypeScript!';
console.log(message);

// Function Declaration
function add(a: number, b: number): number {
  return a + b;
}

const sum = add(3, 5);
console.log(`Sum: ${sum}`);

// Interface
interface Person {
  name: string;
  age: number;
}

// Function with Interface
function greet(person: Person): string {
  return `Hello, ${person.name}! You are ${person.age} years old.`;
}

const personInfo: Person = {
    name: 'John', age: 30,
    firstName: undefined,
    lastName: undefined,
    getFullName: function (): string {
        throw new Error("Function not implemented.");
    },
    isAdult: function (): boolean {
        throw new Error("Function not implemented.");
    }
};
const greeting = greet(personInfo);
console.log(greeting);

// Class
class Animal1 {
  private type: string;

  constructor(type: string) {
    this.type = type;
  }

  makeSound(): string {
    return 'Some generic animal sound';
  }
}

// Inheritance
class Dog1 extends Animal1 {
  constructor() {
    super('Dog');
  }

  makeSound(): string {
    return 'Woof, woof!';
  }
}

const genericAnimal1 = new Animal1('Unknown');
const dog = new Dog1();

console.log(genericAnimal1.makeSound()); // Output: Some generic animal sound
console.log(dog.makeSound()); // Output: Woof, woof!
