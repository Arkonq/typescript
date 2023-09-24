import { Invoice } from './modules/Invoice.js';
import { Payment } from './modules/Payment.js';
import { ListTemplate } from './modules/ListTemplate.js';
import HasFormatter from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber]

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }
  
  list.render(doc, type.value);
});

// Tuples

let arr = ['str', 22, true];
arr[0] = false;
arr[1] = 'another';
arr = [52, false, 'text'];

let tuple: [string, number, boolean] = ['str', 22, true]; // In strict order
tuple[0] = "false";
tuple[1] = 66;

let student: [string, number]; // In strict order
student = ['name', 2516];