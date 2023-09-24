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
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value);
});
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["Book"] = 1] = "Book";
    ResourceType[ResourceType["Author"] = 2] = "Author";
    ResourceType[ResourceType["Film"] = 3] = "Film";
    ResourceType[ResourceType["Director"] = 4] = "Director";
    ResourceType[ResourceType["Person"] = 5] = "Person";
})(ResourceType || (ResourceType = {}));
const docOne = {
    uid: 1,
    resourceType: ResourceType.Film,
    data: { title: 'some data title' },
};
const docTwo = {
    uid: 2,
    resourceType: ResourceType.Author,
    data: { name: "Name here" },
};
console.log(docOne, docTwo);
