// Loops in Array & Objects

//Arrays
let cars = ['Alfa','Mercedes','Toyota',];
//Object
let people = [
    {firstName:'Ahmet',lastName:'Zorlu'},
    {firstName:'Yalçın',lastName:'Tuna'},
    {firstName:'Emrah',lastName:'Zengin'}
]


//For
//Arrays
for (let i = 0; i < cars.length; i++) {
    const element = cars[i];
    //console.log(element);
}
//Object
for (let human = 0; human < people.length; human++) {
    const element = people[human];
    console.log(people[human].firstName);
}


//For-in
//Arrays
for (let i in cars) {
    if (Object.hasOwnProperty.call(cars, i)) {
        const element = cars[i];
        //console.log(cars[i]);
    }
}
//Object
for (const i in people) {
    if (Object.hasOwnProperty.call(people, i)) {
        const element = people[i];
        //console.log(element.firstName);
    }
}




//For Each
//Arrays
cars.forEach(car => {
    //console.log(car);
});

cars.forEach(function(car){
    console.log(car);
});
//Object
people.forEach(human => {
    console.log(human.firstName + ' ' + human.lastName);
});

people.forEach(function(human){
    console.log(human.lastName);
});

//MAP : Returns an array
let val = people.map(human => {
    return console.log(human.firstName.toUpperCase() + ' ' + human.lastName.toUpperCase());
})

 


