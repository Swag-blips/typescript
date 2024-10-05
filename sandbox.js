// primitives
var character = "mario";
var age = 30;
var isBlackBelt = false;
character = "luigi";
age = 40;
isBlackBelt = true;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));
// arrays
var names = ["luigi", "mario", "yoshi"];
names.push("toad");
var numbers = [10, 20, 30, 40];
numbers.push(25);
var mixed = ["ken", 4, "chun-li", 8, 9];
mixed.push("ryu");
mixed.push(10);
mixed[0] = 3;
// objects
var ninja = {
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
var character1;
var age2;
var isLogged3;
age = 30;
isLogged3 = true;
//explicity arrays
var ninjas = [];
ninjas.push("hello");
// union types
var mixed1 = [];
mixed1.push("hello");
mixed1.push(20);
mixed1.push(false);
console.log(mixed);
var uid;
uid = 123;
// objects
var ninja1;
ninja1 = {
    name: "Hello",
    age: 30,
};
var ninja2;
ninja2 = {
    name: "mario",
    age: 20,
    belt: "black",
};
