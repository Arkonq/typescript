export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(h4, p);
        this.container.append(li);
    }
}
