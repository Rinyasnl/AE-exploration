// Helper function to create a method decorator
function logMethod(target: any, key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;
  
    if (typeof originalMethod === 'function') {
      descriptor.value = function (...args: any[]) {
        console.log(`Calling method ${key.toString()} with arguments: ${JSON.stringify(args)}`);
        const result = originalMethod.apply(this, args);
        console.log(`Method ${key.toString()} returned: ${JSON.stringify(result)}`);
        return result;
      };
    }
  
    return descriptor;
  }
  
  class Example {
    ////@logMethod
    add(a: number, b: number): number {
      return a + b;
    }
  
    //@logMethod
    subtract(a: number, b: number): number {
      return a - b;
    }
  }
  
  const example = new Example();
  
  const sum3 = example.add(3, 5);
  console.log(`Sum: ${sum3}`);
  
  const difference = example.subtract(8, 3);
  console.log(`Difference: ${difference}`);
  