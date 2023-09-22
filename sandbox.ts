// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// arrays
let items: string[] = []; // array need to be initialized to use push() method
items.push('Item 1');

// union types
let mixed: (string|number|boolean)[] = [];
mixed.push("String");
mixed.push(100);
mixed.push(false);

let uid: string|number;
uid = 123;
uid = 'string';

// objects
let userOne: object;
userOne = {
  name: "Name",
  age: 23,
};

let userTwo: {
  name: string,
  age: number,
  isOld: boolean,
};

// any type
let anyType: any;
anyType = "string";
anyType = [23, false, "str"];
anyType = { name: 'Name', isOld: false };

let mixedArr: any[] = [];
mixedArr.push(3);
mixedArr.push(true);
mixedArr.push("text");

let userAnyType: {
  name: any,
  age: any,
  isOld: any,
};

userAnyType = {name: 23, age: true, isOld: "no"};

// that's why any type should be used in most rarest cases