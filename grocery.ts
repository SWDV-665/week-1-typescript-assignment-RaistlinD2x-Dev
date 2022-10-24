class Grocery {

  constructor(public name: string, public quantity: number) {}
 
  getQuantity() {
    return `There are ${this.quantity} of the item ${this.name}.`
  }
}



let groceryArray = [new Grocery('Onion', 5), new Grocery('Tomato', 27), new Grocery('Potato', 25)]

function listGroceries(arr: Grocery[]): void {
  let ul = document.createElement('ul')
  for (let i = 0; i < arr.length; i++){
    let li = document.createElement('li')
    const content = document.createTextNode(`${arr[i].name} has ${arr[i].quantity} available.`) 
    li.appendChild(content)
    ul.appendChild(li)
  }
  const myBody = document.getElementById('body')
  myBody.appendChild(ul)
}

listGroceries(groceryArray)

