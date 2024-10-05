// functions

// let greet: Function;

// greet = () => {
//   console.log("Hello world!");
// };

const add = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c);
};

add(2, 5);

const minus = (a: number, b: number) => {
  return a + b;
};

let result = minus(10, 7);

// Type aliases

type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

const greet = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};

// function signatures

let saymyName: (a: string, b: string) => void;

saymyName = (name: string, secondName: string) => {
  console.log(`my name is ${name} ${secondName}`);
};

saymyName("walter", "white");

let calc: (num1: number, num2: number, num3: string) => number;

calc = (num1: number, num2: number, action: string) => {
  if (action === "add") {
    return num1 + num2;
  } else {
    return num1 - num2; 
  }
};
