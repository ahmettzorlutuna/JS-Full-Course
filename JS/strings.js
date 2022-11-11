//Strings

const firstName = 'Ahmet';
const lastName = "Zorlutuna";
const age = 35;
const hobbies = 'f1,kitap,yazılım,teknoloji';
let val;

//String Concatenation
val = firstName + ' ' + lastName;
val = 'Ahmet';
val += 'Zorlutuna' 

val = 'İstanbul\'da yaşıyorum';

//String lenght
val = val.length;

//String concat
val = firstName.concat('-',lastName); //Ahmet-Zorlutuna

//Trim
val = val.trim(); //Boşlukları kesme (   Ahmet Zorlutuna   ) (Ahmet Zorlutuna) gibi.

//String replace
val = val.replace('sadik','çınar');

//String uppercase - lowercase
val = val.toUpperCase();
val = val.toLowerCase();

//Substring
val = val.substring(0,5) //Verilen index değerlerini getirir

//Slice
val = val.slice(6); //Substring ile aynı gibi start vermeye gerek yok.

//val = val.indexOf('e'); //d kaçıncı indexte

//val = val[1];

//Split

val = hobbies.split(',') //Ayırma

console.log(val);
console.log(typeof val);