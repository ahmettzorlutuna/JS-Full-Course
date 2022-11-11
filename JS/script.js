// console.log("Merhaba");
// console.log(1234);
// console.log(true);
// console.log([1,2,3,4]);
// console.error("hata oluştu");
// console.warn("Bir uyarı oluştu");

// console.clear()

//Değişkenler

// var age;
// age = 5;
// console.log(age);

// var fullname;
// fullname = 'ahmetzorlutuna';
// console.log(fullname);

// fullname = 'ahmetzorlutuna23';
// console.log(fullname);

// const email = 'deneme@gmail.com';
// console.log(email);

//Değişken tanımlama kuralları


//Değişken Tipleri

//Primitive Types

//     //String
//     let firstName = 'Çınar';

//     //Number
//     let age = 20;
//     let money = 100.5;

//     //Boolean
//     let isActive = false;

//     //null
//     let job = null;

//     //undefined
//     let car;


// //Reference Types - Objects

//     //Array
//     let name = ['Ali','Ahmet','Mehmet'];

//     //Object
//     let adress = {
//         city: 'Kocaeli',
//         country: 'Türkiye'
//     }

//     //Function

//     var calculateAge = function(a,b){
//         return a+b;
//     };

//     console.log(calculateAge(1,2));

//     console.log(typeof calculateAge);

// Tür Dönüşümleri

let val;

//Number to string
val = String(10);

//bool to string
val = String(true);

//date to string
val = String(new Date());

//array to string
val = String([1,2,3,4]);

//to String()

val = (10).toString();
val = (false).toString();

// String to Number

val = Number('10'); //10
val = Number(true); //1
val = Number(false); //0
val = Number(null); //0
val = Number('a'); //NaN
val = Number([1,2,3,4]); //NaN

//parseInt
//parseFloat

val = parseInt('10');
val = parseInt('10.5');
val = parseFloat('10.5');

// console.log(val);
// console.log(typeof val);
// console.log(val.length);























