//Object Literals

let val;

let person = {
    firstName : 'Sebastian',
    lastName : 'Vettel',
    age : 32,
    hobbies : ['win','pole'],
    address : {
        city : 'Berlin',
        country : 'Germany'
    },
    getBirthYear : function(){
        now = new Date().getFullYear();
        return now - this.age; //This şuan içinde bulunduğumuz objeyi gösterir.
    }
};

val = person.firstName;
val = person.lastName;
val = person['firstName'];
val = person.age;
val = person.address.city;
console.log(person.getBirthYear())


console.log(val);

//Different type

let people = [ 
    {firstName : 'Lewis',lastName : 'Hamilton'},
    {firstName : 'Sebastian',lastName : 'Vettel'},
    {firstName : 'Daniel',lastName : 'Riccardo'},
]

val = people[0];
val = people[0].firstName;

people.forEach(dizi => {
    console.log(dizi);
});

console.log(val);
console.log(typeof people);