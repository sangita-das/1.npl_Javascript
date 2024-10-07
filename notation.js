const person = {
    name: 'Lal Nul Holus Mia',
    profession: 'Traffic Surgon',
    age: 39,
    25: 'summer',
    'son-name': 'Sunny',
    address: 'Shahabag'
}

//  dot notation
const prof1 = person.profession;

// bracket notaion
const prof2 = person["profession"];
console.log(prof2)
const pName = 'profession';
const prof3 = person[pName];
console.log(prof3);


const season = person[25];
console.log(season);

const son = person['son-name']
console.log(son)