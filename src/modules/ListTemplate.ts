import HasFormatter from "../interfaces/HasFormatter.js";

export class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  render (item: HasFormatter, heading: string) {
    const li = document.createElement('li');

    const h4 = document.createElement('h4');
    h4.innerText = heading;
    
    const p = document.createElement('p');
    p.innerText = item.format();
    
    li.append(h4,p);

    this.container.append(li);
  }
}

