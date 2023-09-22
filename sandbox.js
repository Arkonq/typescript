// explicit types
var character;
var age;
var isLoggedIn;
// arrays
var items = []; // array need to be initialized to use push() method
items.push('Item 1');
// union types
var mixed = [];
mixed.push("String");
mixed.push(100);
mixed.push(false);
var uid;
uid = 123;
uid = 'string';
// objects
var userOne;
userOne = {
    name: "Name",
    age: 23,
};
var userTwo;
// any type
var anyType;
anyType = "string";
anyType = [23, false, "str"];
anyType = { name: 'Name', isOld: false };
var mixedArr = [];
mixedArr.push(3);
mixedArr.push(true);
mixedArr.push("text");
var userAnyType;
userAnyType = { name: 23, age: true, isOld: "no" };
// that's why any type should be used in most rarest cases
