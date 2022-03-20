//Arrays
let names = ['hamilton','vettel','verstappen','alonso','ahmet'];
let years = [1985,1987,1997,1981,2002];
let mix = ['lewis','hamilton',1985,null,undefined,['pole','win']];

//Get Array İtem
console.log(names[0])
console.log(names[3])

//Set Array İtem
names[0]='lando'; //*Yanlış kullanım. Burada 4. index boş olacaktır
names[names.length]='lando'; //Doğru

//Add İtem
years.push(1990); //Son'a ekler
//years.upshift(1992); //Başa ekler

//Remove item
years.pop(); //Son elemanı siler
//years.shift(); //Baştaki elemanı siler

//İndexof
let index = names.indexOf('verstappen')
console.log(' index : '+index);

//Reverse 
names.reverse(); //Diziyi ters çevirir.

//Sort
years.sort(); //Dizi sıralanır

//Concat
let val = years.concat(names); //Years ile names dizisi birleşti
console.log(val);

//Splice
names.splice(2,1,'sainz'); //2. indexten itibaren 1. index i sil 'sainz' ı ekle


//Find

//Filter

function over18(year) {
    if (2018 - year>=18) {
        console.log(year+'de doğduysan 18 yaşından büyüksün');
    } else {
        console.log(year+'de doğduysan 18 yaşından küçüksün');
    }
} 
let val1 = years.find(over18);
console.log(val1)







console.log(names);
console.log(names.length);
console.log(typeof names);