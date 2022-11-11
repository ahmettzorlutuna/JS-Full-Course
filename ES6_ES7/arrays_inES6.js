//Arrays in ES6

const boxes = document.querySelectorAll('.box');

//ES5
let boxesES5 = Array.prototype.slice.call(boxes);

boxesES5.forEach(element => {
    let box = element.style;
    box.backgroundColor = 'green';
    box.color = 'black';
});

//ES6
Array.from(boxes).forEach(box => {
    box.style.backgroundColor = 'black';
})


//ES5
for (let box = 0; box < boxesES5.length; box++) {
    const element = boxesES5[box];
    if(element.className == 'box orange'){
        continue;
    }
    element.style.backgroundColor = '#513F'
}
console.log(boxesES5);

//ES6

var boxesES6 = Array.from(boxes);
for(let box of boxesES6){
    if(box.className == 'orange'){
        continue;
    }
    box.textContent = "I'm changed";
    box.style.color = 'red';
}
console.log(boxesES6);



//For loop from structure
const cars = [
    {name:'Ferrari F8',price: 80000},
    {name:'Ferrari F8',price: 80000},
    {name:'Ferrari LaFerrari',price: 130000},
    {name:'Lambo SV',price: 140000},
]

//ES6

//from
const carArray = Array.from(cars,car => car);
console.log(carArray);

//Selecting with find
console.log(cars.find(car => car.name = 'Ferrari F8'));

//Selecting with filter
console.log(cars.filter(car => car.name == 'Ferrari F8'));



//from
for(let car of cars){
    console.log(car.name);
}

//Entries
let numbers = ['a','b','c'];

//Entries keys + value array
let entries = numbers.entries();

for(let i of entries){
    console.log(i);
};

//Keys and value
let key = numbers.keys();
let value = numbers.values();

for(let [i,j] of [key,value]){
    console.log(i,j);
};

