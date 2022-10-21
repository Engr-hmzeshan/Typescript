// Object orented-programming and references

// <!!<<<Discussions------>

// 1. Readonly and optional property
// Sometimes we need a property that will not change i.e id of a user we prefix this as readonly. We can not change this property even inside of class object. Similarly we may need an optional property in constructor for sometimes.
// 2. Access Control keywords(public, private, protected)
// We offtenly need properties that should not be accessable in all instances, and we have to avoid that properties to be modified explicitely, that's why we prefix with 'private'. To read those properties we make methods to get those properties
// 3. Parameter properties
// We can concise the code by declairing all properties in a single place in consutructor that will automatically create properties and add in any instance
// 4. getter and setter
// Specially used to get any value in class as properties, and set is used to perform some functionality on this
// 5. index signatures
// If we wanna dynamically update the object we can use index signature [prtopertyName: dataType]: TypeofPropertyValue
// 6. static method and property
// If we limitted the property on Base class or can not have access to other instances we use static methods r static properties
class Account {
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number,
    public nickName?: string
  ) {}
  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    // Record the transaction i.e avoid mutating balance in any instance
    this._balance += amount;
  }
  getBalance(): number {
    return this._balance;
  }
  get balance(): number {
    return this._balance;
  }

  // another way of getting balance value and set/validate it
}
const account = new Account(1, "Zeshan", 0);
account.deposit(100);
console.log("Balance", account.getBalance());
console.log("Balance", account.balance);

// If we wanna check the instance of a class
console.log(account instanceof Account);
// Index signatures
class SeatAssignment {
  [seatNumber: string]: string;
}
let seats = new SeatAssignment();
seats.A1 = "Zeshan";
seats.A2 = "Irfan";
seats["A3"] = "Rizwan";
console.log(seats);
// Static
class Rides {
  // startLocation
  // dropOffLocation
  // activeRides
  // active ride should be object scope we do not wanna create on every instance
  private static _activeRides: number = 0;
  start() {
    Rides._activeRides++;
  }
  stop() {
    Rides._activeRides--;
  }
  static get activeRides() {
    return Rides._activeRides;
  }
}
const ride1 = new Rides();
ride1.start();
const ride2 = new Rides();
ride2.start();
console.log(Rides.activeRides);

// Inheritance
class Person {
  constructor(public firstName: string, public lastName: string) {}
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  // protected are inherited
  protected walk(): void {
    console.log("Walk");
  }
}
class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
  get sId() {
    // inherited from person
    this.walk();
    return console.log(this.studentId);
  }
}
const student1 = new Student(1, "Zeshan", "Alram");
student1.sId;
// override
// We should turn on the settings for override method "noImplicitOverride": true
class Teacher extends Person {
  override get fullName() {
    return `Proffessor ${super.fullName}`;
  }
}
const teacher = new Teacher("Mohsin", "Ameen");
console.log(teacher.fullName);

// Polymorphism
// Private vs protected members
// Private members are used only within base class and they are not inherited by other instances however, protected members vice versa.
// abstract classes and method
// When a base class depends on derived class and only returns it's method once the instance is created then we used abstract classes

abstract class Shape {
  constructor(public color: string) {}
  abstract render(): void;
}
class Circle extends Shape {
  constructor(public radious: number, color: string) {
    super(color);
  }
  override render(): void {
    console.log("Render a Circle");
  }
}

const newCircle = new Circle(23, "red");

// Interfaces
// They are simply describes the shape of object

// abstract class Calender {
//   constructor(public name: string) {}
//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }
// class GoogleCalender extends Calender {
//   constructor(name: string) {
//     super(name);
//   }
//   addEvent(): void {
//     throw new Error("Method not implemented.");
//   }
//   removeEvent(): void {
//     throw new Error("Method not implemented.");
//   }
// }
interface Calender {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}
class GoogleCalender implements Calender {
  constructor(public name: string) {}
  addEvent(): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
}
// Exercise
// 1.
class Logger {
  constructor(public logFile: string) {}
  log(message: string) {
    console.log(message);
  }
}
const log = new Logger("Log File");
log.log("This is a message");
// 2.
class Persons {
  constructor(public firstName: string, public lastName: string) {}
  get fullName(): string {
    return this.firstName + " " + this.lastName;
  }
}
const person = new Person("Zeshan", "Akram");
console.log(person.fullName);
// 3.
// class Employee extends Persons {
//   constructor(public sallery: string, firstName: string, lastName: string) {
//     super(firstName, lastName);
//   }
// }
// 4. private members not inherited in any instance class however private members can inherited in all instances

// 5.
interface Address {
  street: string;
  city: string;
  zipCode: number;
}

interface Employees {
  name: string;
  sallery: number;
  address: Address;
}

// Generics
// We need a generic functions and classes data types to use them for multiple args, for thie we create a templete for our data types

// Generics Classes
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}
let keyValue = new KeyValuePair(1, "2");
keyValue.value;

// Generic functions and methods
class Utility {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}
const util = Utility.wrapInArray("2");
// generic interfaces
// suppose we call for en endpoint
interface Result<T> {
  data: T | null;
  error: null;
}
function fetch<T>(url: string): Result<T> {
  console.log(url);

  return { data: null, error: null };
}
interface Users {
  usernmae: string;
}
interface Products {
  title: string;
}
const result = fetch<Users>("url");

// Generic Constraints
// We can specify by anyType, shape, interface, classes or even any derived classes.
// <T extends number | string>
//<T extends { name: string}>
//<T extends Person> i.e interface or class or any instance of that class
// interface Personss {
//   name: string;
// }
class Personss {
  constructor(public name: string) {}
}
function echo<T extends Personss>(value: T): T {
  return value;
}
echo(new Personss("a"));

// Extending the generic classes and keyof operator.
// Let say we have a mechanism of storing products in the store
interface Productsss {
  name: string;
  price: number;
}
// We may need a multiple obj to store different kinds.
class Store<T> {
  protected _products: T[] = [];

  add(obj: T): void {
    this._products.push(obj);
  }
  get productDetails(): T[] | undefined {
    return this._products;
  }
  find(property: keyof T, value: unknown): T | undefined {
    // Bydefault the compiler takes the bracket notation as index signatures butv we have to tell the compiler about this
    return this._products.find((product) => product[property] === value);
  }
}
const productget = new Store<Productsss>();
productget.add({ name: "abc", price: 1321 });
productget.add({ name: "acbc", price: 79879 });
productget.add({ name: "abdasdc", price: 1346 });
console.log(productget.find("name", "abc"));
console.log(productget.find("price", 1346));
// Pass the generic type parameter
class CompressableStore<T> extends Store<T> {
  compress() {}
}
const store = new CompressableStore<Productsss>();
const resultssss = store.add({ name: "Car", price: 1222 });
console.log(store.productDetails);

// Restrict the generic parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  findProductByName(name: string): T | undefined {
    return this._products.find((obj) => obj.name === name);
  }
}

// Fix the generic type parameter
class ProductStore extends Store<Productsss> {
  filterByCategory(category: string): Productsss[] {
    console.log(category);
    return [];
  }
}

// type Mapping
// some times we need a type based on another type i,e same property with optional or readonly
interface Personsss {
  name: string;
  age: number;
}
type ReadonlyGeneric<T> = {
  readonly [K in keyof T]: T[K];
  // K contains all the keys in defined object and T[K] user to get the values (i.e string, number)
};
type OptionalKeys<T> = {
  [K in keyof T]?: T[K];
  // K contains all the keys in defined object and T[K] user to get the values (i.e string, number)
};
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
  // K contains all the keys in defined object and T[K] user to get the values (i.e string, number)
};

// Exercise
function echoEx<T>(arg: T) {
  return arg;
}

function printName<T extends { name: string }>(obj: T) {
  console.log(obj.name);
}
class Entity<T> {
  constructor(public id: T) {}
}
