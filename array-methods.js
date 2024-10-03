const products = [
    {name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 7000, brand: 'iphone', color: 'golden'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price: 300, brand: 'r-bon', color: 'black'},
    {name: 'camera', price: 9000, brand: 'canon', color: 'gray'},
];


// using map it returns array so we write a name by using const so that we can store data on it
const brands = products.map(product => product.brand)
console.log(brands);
const prices = products.map(product => product.price)
console.log(prices)

// forEach write the output normal way it doesn't return array so we write directly
products.forEach(product => console.log(product))
products.forEach(product => console.log(product.color))

// 3. filter return array
const cheap = products.filter(product => product.price <=  5000);
console.log(cheap)

const specificName = products.filter(product => product.name.includes('n'))
console.log(specificName)


// 4. find
// find and filter has  tiny difference find return the 1st matching array
const special = products.find(product => product.name.includes('n') )
console.log(special)