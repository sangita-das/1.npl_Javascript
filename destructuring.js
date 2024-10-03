// 1. array destructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65]

const [x, y] = numbers;
console.log(x,y)


function boxify (num1, num2){
    const nums = [num1, num2];
    return nums;
}

// const [first, second] = [90,34]
const [first, second] = boxify [90,34]

console.log (boxify (90, 43));

const student = {
    name: 'Sakib Khan',
    age: 32,
    movies: ['king Khan', 'Dhakar Mastan']
}

const [firstMovie, secondMovie] = student.movies;



// Object destructuring
const {name, age} = {name: 'alu', age: '14'}
const {name1, age1} = {id: 2, name: 'alu', age: '14'}

const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    language: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarKhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

const {machine, ide} = employee;
const { weight, address} = employee.specification;
const {color, price} = employee?.specification?.watch;