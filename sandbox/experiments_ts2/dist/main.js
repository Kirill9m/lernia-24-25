"use strict";
const user = {
    age: 24,
    name: "Max",
};
const address = {
    city: "SPB",
    country: "Russia",
};
const common = Object.assign(Object.assign({}, user), address);
let commonA;
commonA = Object.assign(Object.assign({}, user), address);
let array;
array = ["1", "2"];
const numbers = [0, 1, 2, 3];
console.log(numbers[1]);
const newArray = [1, "2", null];
function getChannel(name) {
    return { name };
}
const getChannelName = (name) => {
    return { name };
};
const getChannelNameA = (name) => {
    return { name };
};
console.log(getChannel("number"), getChannelName("myName"));
const getNumbers = (...number) => {
    return numbers;
};
function getCar(name, price) {
    return price ? `Name ${name}, Price ${price}` : `Name ${name}`;
}
const car1 = getCar("bmw");
const car2 = getCar("bmw", 1000);
class Car {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getInfo() {
        return `${this.name} - ${this.price}`;
    }
}
class Bus extends Car {
    constructor(name, price) {
        super(name, price);
    }
    test() {
        return this.getInfo();
    }
}
const car = new Car("BWM", 100000);
// console.log(car.getInfo()); get info is protected!
const bus = new Bus("VW", 10000);
console.log(bus.test());
//# sourceMappingURL=main.js.map