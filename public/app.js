const personOne = {
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
const personTwo = {
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
const greetPerson = (individual) => {
    console.log(`Hello ${individual.name}!`);
};
greetPerson(personOne);
import { Invoice } from './modules/Invoice.js';
const invOne = new Invoice("Mario", 'work on website', 150);
const invTwo = new Invoice("Jack", 'work on website', 230);
let invoices = [];
invoices.push(invOne, invTwo);
invoices.forEach(inv => {
    console.log(inv.format());
});
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
