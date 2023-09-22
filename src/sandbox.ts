// of type Function, capitilized
let greet: Function;

greet = () => {
  console.log('hello');
}

// c? - optional
// c = 10 - default
// functions with no return have type void, there it's written, but usually if u don't even define them they still return void
const optionalDefault = (a: number, b: number, c/*?*/: number | string = 10): void => {
  console.log(a + b, c);
}

optionalDefault(5, 7);
optionalDefault(5, 8, 'text');

const returnTypeNum = (a: number, b: number): number => {
  return a + b;
}

let result = returnTypeNum(10,7);
console.log(result);