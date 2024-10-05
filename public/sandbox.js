"use strict";
// primitives
let character = "mario";
let age = 30;
let isBlackBelt = false;
character = "luigi";
age = 40;
isBlackBelt = true;
const circ = (diameter) => {
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
let character1;
let age2;
let isLogged3;
age = 30;
isLogged3 = true;
//explicity arrays
let ninjas = [];
ninjas.push("hello");
// union types
let mixed1 = [];
mixed1.push("hello");
mixed1.push(20);
mixed1.push(false);
console.log(mixed);
let uid;
uid = 123;
// objects
let ninja1;
ninja1 = {
    name: "Hello",
    age: 30,
};
let ninja2;
ninja2 = {
    name: "mario",
    age: 20,
    belt: "black",
};
// dynamic types
let age1 = 25;
age1 = "hello";
console.log(age1);
age1 = { name: "luigi" };
console.log(age1);
let mixed2 = [];
mixed2.push(2);
mixed2.push("Hello");
mixed2.push(true);
console.log(mixed2);
