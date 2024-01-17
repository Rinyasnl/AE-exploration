
type Bird = {
    fly: () => void;
  };
  
  type Fish = {
    swim: () => void;
  };
  
  type Pet = Bird | Fish;
  
  function isBird(pet: Pet): pet is Bird {
    return 'fly' in pet;
  }
  

  function isFish(pet: Pet): pet is Fish {
    return (pet as Fish).swim !== undefined;
  }
  

  function playWithPet(pet: Pet) {
    if (isBird(pet)) {
      console.log('Playing with a bird...');
      pet.fly();
    } else if (isFish(pet)) {
      console.log('Playing with a fish...');
      pet.swim();
    } else {
      console.log('Unknown pet type');
    }
  }
  

  const myBird: Bird = { fly: () => console.log('Flying!') };
  const myFish: Fish = { swim: () => console.log('Swimming!') };
  
 
  playWithPet(myBird); // Outputs: Playing with a bird... Flying!
  playWithPet(myFish); // Outputs: Playing with a fish... Swimming!
  