// 1. JSON => stringify, parse
const student = {
    name: 'Sakib Khan',
    age: 32,
    movies: ['king Khan', 'Dhakar Mastan']
}


// JSON.stringify [to convert Object to JSON]
const studentJSON = JSON.stringify(student)
console.log(student);
console.log(studentJSON)

// JSON.parse [to convert JSON to object]
const studentObj = JSON.parse(studentJSON)
console.log(studentObj)

// 2. fetch
/* fetch('url')
.then(res => res.json())
.then(data => console.log(data))
 */

// keys, values
const keys = Object.keys(student)
const values = Object.values(student)


// for
const numbers = [23, 54, 67, 87, 23, 78]
numbers.forEach(num => console.log(num))
numbers.map (num => num*2)

// for of on array like object
// loop on an object using for in

// add or remove from an array
const products = [
    {name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 7000, brand: 'HTC', color: 'golden'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price: 300, brand: 'r-bon', color: 'black'},
    {name: 'camera', price: 9000, brand: 'canon', color: 'gray'},
];

const newProduct = {name: 'webcam', price: 700, brand: 'lal'};
// copy products array and then add newProduct
const newProducts = [...products, newProduct];
console.log(newProducts)

// create a new array without one specific item
// remove phone means create a new array without the phone 
const remaining = products.filter(product => product.name !== 'phone')
console.log(remaining)