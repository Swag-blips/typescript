"use strict";
// functions
// let greet: Function;
// greet = () => {
//   console.log("Hello world!");
// };
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(2, 5);
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
const greet = (user) => {
    console.log(`${user.name} says hello`);
};
