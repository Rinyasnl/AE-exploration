
class Person {
    // Constructor to initialize object properties
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    // Method to get the full name
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    // Method to check if the person is an adult
    isAdult() {
      return this.age >= 18;
    }
  }
  
  // Create instances of the Person class
  const person1 = new Person("John", "Doe", 25);
  const person2 = new Person("Jane", "Smith", 30);
  
  // Access properties and call methods
  console.log(person1.getFullName());   // Output: John Doe
  console.log(person2.isAdult());        // Output: true
  