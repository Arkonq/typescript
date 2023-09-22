// let greet: Function;

// example 1
let greet: (anyName: string, putThere: string) => void; 

greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  return action === "add" ? numOne + numTwo : numOne - numTwo;
}

// example 3
let logDetails: (anyNameForObject: {name: string, age: number}) => void;

type Person = { name: string, age: number }

logDetails = (user: Person) => {
  console.log(`${user.name} is ${user.age} y.o.`);
}