let character = "Name";
let age = 24;
let isPensioner = false;

// Define type of argument
const circ = (diameter: number) => {
  return diameter * Math.PI;
}
console.log(circ(3));


let names = ['one','two','three'];
names.push('four');
// names[0] = 1; // Can't take any other type than string

let nums = [1,2,3];
nums.push(2);
// nums.push('text') // Can't take any other type than number

// Amount of types in init gives it possibility to have those types
let mixed = ['name', 4, "surname", true]; 
mixed.push(1);
mixed.push('two');
mixed.push(false);
mixed[4] = 33;

let obj = {
  name: "name",
  age: 23,
  isOld: false,
}