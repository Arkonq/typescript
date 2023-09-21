var character = "Name";
var age = 24;
var isPensioner = false;
// Define type of argument
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(3));
var names = ['one', 'two', 'three'];
names.push('four');
// names[0] = 1; // Can't take any other type than string
var nums = [1, 2, 3];
nums.push(2);
// nums.push('text') // Can't take any other type than number
// Amount of types in init gives it possibility to have those types
var mixed = ['name', 4, "surname", true];
mixed.push(1);
mixed.push('two');
mixed.push(false);
mixed[4] = 33;
var obj = {
    name: "name",
    age: 23,
    isOld: false,
};
