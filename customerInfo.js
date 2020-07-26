import { customer } from "./customer.js";


//1.
let orders = customer.length
document.getElementById("orders").innerHTML = orders
console.log(orders)

//2.
let amounts = []
customer.map(i =>
    amounts.push(i.amount)
)
let sum = amounts.reduce((total, i) => total + parseInt(i), 0)
document.getElementById("amount").innerHTML = sum
console.log(sum)

// 3.
let names = []
customer.map(i =>
    names.push(i.name)
)
var freqs = {};
names.forEach(n => {
    if (!(n in freqs)) freqs[n] = 1;
    else freqs[n] += 1;
});
console.log(Object.keys(freqs).filter(k => freqs[k] === 1))
var once = Object.keys(freqs).filter(k => freqs[k] === 1)

var listContainer = document.createElement('div')
// Make the list
var listElement = document.createElement('ul')
// Set up a loop that goes through the items in listItems one at a time
var numberOfListItems = once.length
var once
var i;

// Add it to the page
document.getElementsByTagName('body')[0].appendChild(listContainer);
listContainer.appendChild(listElement);
listElement.innerHTML = "Customers who ordered just once:"
for (i = 0; i < numberOfListItems; ++i) {
    // create an item for each one
    var listItem = document.createElement('li');

    // Add the item text
    listItem.innerHTML = once[i];

    // Add listItem to the listElement

    listElement.appendChild(listItem);
    document.getElementById("once").appendChild(listElement)
}


// 4.
console.log(Object.keys(freqs).filter(k => freqs[k] === 2))
console.log(Object.keys(freqs).filter(k => freqs[k] === 3))
console.log(Object.keys(freqs).filter(k => freqs[k] === 4))
console.log(Object.keys(freqs).filter(k => freqs[k] > 5))

//5.



//7.
