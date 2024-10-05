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
