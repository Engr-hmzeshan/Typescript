"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Pipe(constructor) {
    console.log("Pipe Decorator is called");
    constructor.prototype.pipe = true;
}
function Component(value) {
    return (constructor) => {
        constructor.prototype.valueId = value.id;
        console.log("Decorator is called");
        constructor.prototype.userId = Date.now();
    };
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component({ id: "2" }),
    Pipe
], ProfileComponent);
function Log(target, methodName, descriptor) {
    const original = descriptor.value;
    console.log(target, methodName);
    descriptor.value = function (...args) {
        console.log("Before");
        original.call(this, ...args);
        console.log("After");
    };
}
class MethodDecorators {
    say(message) {
        console.log(message);
    }
}
__decorate([
    Log
], MethodDecorators.prototype, "say", null);
const methodDecorator = new MethodDecorators();
methodDecorator.say("Hay");
function Capitalize(target, methdodName, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        console.log(target, methdodName);
        const fullName = original === null || original === void 0 ? void 0 : original.call(this);
        return typeof fullName === "string" ? fullName.toUpperCase() : fullName;
    };
}
class AccessorsDecorators {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
__decorate([
    Capitalize
], AccessorsDecorators.prototype, "fullName", null);
const accessors = new AccessorsDecorators("hafiz", "zeshan");
console.log(accessors.fullName);
function MinLength(length) {
    return (target, propertyName) => {
        let value;
        const descriptor = {
            get() {
                return value;
            },
            set(newValue) {
                if (newValue.length < length)
                    throw new Error(`${propertyName} at least ${length} charctor long`);
                value = newValue;
            },
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class PropertyDecorators {
    constructor(password) {
        this.password = password;
    }
}
__decorate([
    MinLength(4)
], PropertyDecorators.prototype, "password", void 0);
const propertyDecorators = new PropertyDecorators("1234");
console.log(propertyDecorators.password);
const watchParameter = [];
function Watch(target, methdodName, parameterIndex) {
    console.log(target);
    watchParameter.push({
        methdodName,
        parameterIndex,
    });
}
class Vehicle {
    move(speed) {
        return speed;
    }
}
__decorate([
    __param(0, Watch)
], Vehicle.prototype, "move", null);
const car = new Vehicle();
console.log(watchParameter);
//# sourceMappingURL=decorators.js.map