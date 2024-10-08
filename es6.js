const numbers = [43,65,72,89]

const student = {
    name: 'sakib khan',
     age: '32',
     movies: ['king khan', 'mastan']
}

// template string
const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]} also like movies ${student.movies[0]}`
console.log(about)

// 2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 55;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// spread operator
const newNumbers = [...numbers];
numbers.push(99);
console.log(newNumbers);
console.log(numbers)
console.log(numbers.length)

// create a new array from an older array and add an element to it
const  currentNumbers = [...numbers, 55];
console.log(currentNumbers);
