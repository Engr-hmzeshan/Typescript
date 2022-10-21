// Decorators
// decorators are used as attributes of class which deterined how class behave, we can add properties, method etc.. under the hood they are simple functions that called.

// Start
// To start with decorators we need to turn on the settings "experimentalDecorators": true
// function Component(constructor: Function) {
//   // decorator is simply a function the args depands type of function we use
//   // We can do the same thing by a class with inheritence but this is an other tool
//   console.log("Decorator is called");
//   constructor.prototype.userId = 1;
// }
// @Component
// class ProfileComponent {}

// Factory Decorator OR parameterized decorator

type ComponentOptions = {
  id: string;
};
function Pipe(constructor: Function) {
  console.log("Pipe Decorator is called");
  constructor.prototype.pipe = true;
}
function Component(value: ComponentOptions) {
  return (constructor: Function) => {
    constructor.prototype.valueId = value.id;
    console.log("Decorator is called");
    constructor.prototype.userId = Date.now();
  };
}
// Composition of decorator
// Order of Decorator(REVERSE) i.e f(g(x))
@Component({ id: "2" })
@Pipe
class ProfileComponent {}

// Method Decorators
// 1. args=> (target object that owns the methods, methdodName, descriptor obj that has a type which describes the proprty value)
// 2. descriptor.value has a reference of method so we can replace or edit that method
// 3. never use an arrow function while changing the method
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function;
  // We can replace the method completely or can called in btw some tasks
  console.log(target, methodName);

  descriptor.value = function (...args: any) {
    console.log("Before");
    original.call(this, ...args);
    console.log("After");
  };
}
class MethodDecorators {
  @Log
  say(message: string) {
    console.log(message);
  }
}
const methodDecorator = new MethodDecorators();
methodDecorator.say("Hay");

// Accessors OR Get/Set Decorators
function Capitalize(
  target: any,
  methdodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;
  descriptor.get = function () {
    console.log(target, methdodName);
    const fullName = original?.call(this);
    return typeof fullName === "string" ? fullName.toUpperCase() : fullName;
  };
}
class AccessorsDecorators {
  constructor(public firstName: string, public lastName: string) {}
  @Capitalize
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
const accessors = new AccessorsDecorators("hafiz", "zeshan");
console.log(accessors.fullName);

// Property Decorators
// in the property decorator we design the descriptor to perform some functionality on properties
// 1. set is used to take action on property before o after it called
// get is used to return that updated value
function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    let value: string;
    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },
      set(newValue: string) {
        if (newValue.length < length)
          throw new Error(`${propertyName} at least ${length} charctor long`);
        value = newValue;
      },
    };
    Object.defineProperty(target, propertyName, descriptor);
  };
}
class PropertyDecorators {
  @MinLength(4)
  password: string;
  constructor(password: string) {
    this.password = password;
  }
}
const propertyDecorators = new PropertyDecorators("1234");
console.log(propertyDecorators.password);

// Parameter decorator
// These are not offten used but good for storing some information about the parameters to perform some functionality
type WatchParameter = {
  methdodName: string;
  parameterIndex: number;
};
const watchParameter: WatchParameter[] = [];
function Watch(target: any, methdodName: string, parameterIndex: number) {
  console.log(target);
  watchParameter.push({
    methdodName,
    parameterIndex,
  });
}
class Vehicle {
  move(@Watch speed: number) {
    return speed;
  }
}
const car = new Vehicle();
console.log(watchParameter);
