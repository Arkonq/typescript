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

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
  
  list.render(doc, type.value);
});

// ENUMS
enum ResourceType {
  Book = 1, Author = 2, Film = 3, Director = 4, Person = 5
}

interface Resource<T> {
  uid: number;
  resourceType: number;
  data: T;
}

const docOne: Resource<object> = {
  uid:1,
  resourceType: ResourceType.Film,
  data: { title: 'some data title'},
}

const docTwo: Resource<object> = {
  uid:2,
  resourceType: ResourceType.Author,
  data: { name: "Name here" },
}

console.log(docOne, docTwo);