type TypeUser = {
  name: String;
  age: number;
};

type TypeAddress = {
  city: string;
  country: string;
};

const user = {
  age: 24,
  name: "Max",
};

const address = {
  city: "SPB",
  country: "Russia",
};

const common = {
  ...user,
  ...address,
};

let commonA: TypeAddress & TypeUser;

commonA = {
  ...user,
  ...address,
};

let array: string[];
array = ["1", "2"];

const numbers: ReadonlyArray<number> = [0, 1, 2, 3];

console.log(numbers[1]);

type TypeArray = [number, string, null];
const newArray: TypeArray = [1, "2", null];

type TypeChannelReturn = {
  name: string;
};

function getChannel(name: string): TypeChannelReturn {
  return { name };
}

const getChannelName = (name: string): TypeChannelReturn => {
  return { name };
};

type TypeChannelFunction = (name: string) => TypeChannelReturn;
const getChannelNameA: TypeChannelFunction = (name) => {
  return { name };
};

console.log(getChannel("number"), getChannelName("myName"));

const getNumbers = (...number: number[]) => {
  return numbers;
};

function getCar(name: string): string;
function getCar(name: string, price: number): string;

function getCar(name: string, price?: number): string {
  return price ? `Name ${name}, Price ${price}` : `Name ${name}`;
}

const car1 = getCar("bmw");
const car2 = getCar("bmw", 1000);

class Car {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  protected getInfo(): string {
    return `${this.name} - ${this.price}`;
  }
}

class Bus extends Car {
  constructor(name: string, price: number) {
    super(name, price);
  }
  test() {
    return this.getInfo();
  }
}

const car = new Car("BWM", 100000);

// console.log(car.getInfo()); get info is protected!

const bus = new Bus("VW", 10000)
console.log(bus.test());