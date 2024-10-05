// primitives

let character = "mario";
let age = 30;
let isBlackBelt = false;

character = "luigi";

age = 40;
isBlackBelt = true;

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(7.5));

// arrays

let names = ["luigi", "mario", "yoshi"];

names.push("toad");

let numbers = [10, 20, 30, 40];
numbers.push(25);

let mixed = ["ken", 4, "chun-li", 8, 9];

mixed.push("ryu");
mixed.push(10);
mixed[0] = 3;

// objects

let ninja = {
  name: "shaun",
  belt: "black",
  age: 30,
};

ninja.age = 40;
ninja.name = "ryu";

ninja = {
  name: "yoshi",
  belt: "orange",
  age: 40,
};

// explicit types

// explicit primitives
let character1: string;
let age2: number;
let isLogged3: boolean;

age = 30;
isLogged3 = true;

//explicity arrays

let ninjas: string[] = [];

ninjas.push("hello");

// union types
let mixed1: (string | number | boolean)[] = [];
mixed1.push("hello");
mixed1.push(20);
mixed1.push(false);
console.log(mixed);

let uid: string | number;
uid = 123;

// objects

let ninja1: object;

ninja1 = {
  name: "Hello",
  age: 30,
};

let ninja2: {
  name: string;
  age: number;
  belt: string;
};

ninja2 = {
  name: "mario",
  age: 20,
  belt: "black",
};
