"use strict";
class Account {
    constructor(id, owner, _balance, nickName) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        this.nickName = nickName;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
    getBalance() {
        return this._balance;
    }
    get balance() {
        return this._balance;
    }
}
const account = new Account(1, "Zeshan", 0);
account.deposit(100);
console.log("Balance", account.getBalance());
console.log("Balance", account.balance);
console.log(account instanceof Account);
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = "Zeshan";
seats.A2 = "Irfan";
seats["A3"] = "Rizwan";
console.log(seats);
class Rides {
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
Rides._activeRides = 0;
const ride1 = new Rides();
ride1.start();
const ride2 = new Rides();
ride2.start();
console.log(Rides.activeRides);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    walk() {
        console.log("Walk");
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    get sId() {
        this.walk();
        return console.log(this.studentId);
    }
}
const student1 = new Student(1, "Zeshan", "Alram");
student1.sId;
class Teacher extends Person {
    get fullName() {
        return `Proffessor ${super.fullName}`;
    }
}
const teacher = new Teacher("Mohsin", "Ameen");
console.log(teacher.fullName);
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radious, color) {
        super(color);
        this.radious = radious;
    }
    render() {
        console.log("Render a Circle");
    }
}
const newCircle = new Circle(23, "red");
class GoogleCalender {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        throw new Error("Method not implemented.");
    }
    removeEvent() {
        throw new Error("Method not implemented.");
    }
}
class Logger {
    constructor(logFile) {
        this.logFile = logFile;
    }
    log(message) {
        console.log(message);
    }
}
const log = new Logger("Log File");
log.log("This is a message");
class Persons {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}
const person = new Person("Zeshan", "Akram");
console.log(person.fullName);
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let keyValue = new KeyValuePair(1, "2");
keyValue.value;
class Utility {
    static wrapInArray(value) {
        return [value];
    }
}
const util = Utility.wrapInArray("2");
function fetch(url) {
    console.log(url);
    return { data: null, error: null };
}
const result = fetch("url");
class Personss {
    constructor(name) {
        this.name = name;
    }
}
function echo(value) {
    return value;
}
echo(new Personss("a"));
class Store {
    constructor() {
        this._products = [];
    }
    add(obj) {
        this._products.push(obj);
    }
    get productDetails() {
        return this._products;
    }
    find(property, value) {
        return this._products.find((product) => product[property] === value);
    }
}
const productget = new Store();
productget.add({ name: "abc", price: 1321 });
productget.add({ name: "acbc", price: 79879 });
productget.add({ name: "abdasdc", price: 1346 });
console.log(productget.find("name", "abc"));
console.log(productget.find("price", 1346));
class CompressableStore extends Store {
    compress() { }
}
const store = new CompressableStore();
const resultssss = store.add({ name: "Car", price: 1222 });
console.log(store.productDetails);
class SearchableStore extends Store {
    findProductByName(name) {
        return this._products.find((obj) => obj.name === name);
    }
}
class ProductStore extends Store {
    filterByCategory(category) {
        console.log(category);
        return [];
    }
}
function echoEx(arg) {
    return arg;
}
function printName(obj) {
    console.log(obj.name);
}
class Entity {
    constructor(id) {
        this.id = id;
    }
}
//# sourceMappingURL=class.js.map