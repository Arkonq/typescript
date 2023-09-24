import { Invoice } from './modules/Invoice.js';
import { Payment } from './modules/Payment.js';
import { ListTemplate } from './modules/ListTemplate.js';
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value);
});
// Tuples
let arr = ['str', 22, true];
arr[0] = false;
arr[1] = 'another';
arr = [52, false, 'text'];
let tuple = ['str', 22, true]; // In strict order
tuple[0] = "false";
tuple[1] = 66;
let student; // In strict order
student = ['name', 2516];
