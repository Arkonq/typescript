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