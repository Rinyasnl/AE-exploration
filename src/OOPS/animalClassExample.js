// Parent class
function Animal(name) {
 
    let _name = name;
  
    
    this.getName = function () {
      return _name;
    };
  }
  
  
  Animal.prototype.makeSound = function () {
    return "Generic Animal Sound";
  };
  
  // Child class inheriting from Animal
  function Dog(name, breed) {
   
    Animal.call(this, name);
  
    // Additional property for Dog
    this.breed = breed;
  }
  
  // Inherit methods from the Animal prototype
  Dog.prototype = Object.create(Animal.prototype);
  // Set the constructor property explicitly
  Dog.prototype.constructor = Dog;
  
  
  Dog.prototype.makeSound = function () {
    return "Woof Woof";
  };
  
  
  const genericAnimal = new Animal("Generic Animal");
  const myDog = new Dog("Buddy", "Golden Retriever");
  
  
  console.log(genericAnimal.getName());  // Output: Generic Animal
  console.log(genericAnimal.makeSound()); // Output: Generic Animal Sound
  
  console.log(myDog.getName());           // Output: Buddy
  console.log(myDog.breed);               // Output: Golden Retriever
  console.log(myDog.makeSound());         // Output: Woof Woof
  