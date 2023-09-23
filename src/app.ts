// interfaces
interface Person {
  name: string,
  age: number,
  speak(text: string): void;
  spend(cash: number): number;
}

const personOne: Person = {
  name: "Jake",
  age: 22,
  speak(words) {
    console.log(words);
  },
  spend(money) {
    console.log(`I spent ${money}`);
    return money;
  },
};

const personTwo: Person = {
  name: "another",
  age: 611,
  speak(words) {
    console.log("another thing, cause i can do it in interfaces");
  },
  spend(dollars) {
    console.log(`I don't spend ${dollars} at all`);
    return dollars;
  },
};

console.log(personOne, personTwo);

const greetPerson = (individual: Person) => {
  console.log(`Hello ${individual.name}!`);
}

greetPerson(personOne);

import { Invoice } from './modules/Invoice.js';

const invOne = new Invoice("Mario", 'work on website', 150);
const invTwo = new Invoice("Jack", 'work on website', 230);

let invoices: Invoice[] = [];
invoices.push(invOne, invTwo);

invoices.forEach(inv => {
  console.log(inv.format()); 
})

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value, 
    tofrom.value, 
    details.value, 
    amount.valueAsNumber
  );
})