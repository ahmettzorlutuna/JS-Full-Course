let val;

//Object Literals
let ahmet = {
    name:"Ahmet",
    age:"45",
    city:"İstanbul",
    deneme (){
        console.log(`Ahmet objesinin içindeki deneme methodu ${this.name}`)
    }
};

//Array
let numbers = [10,20,30];

let num = 10;

val = num;
val = ahmet;
val = numbers;


// console.log(val.deneme()); 
console.log(val);
console.log(typeof val);
