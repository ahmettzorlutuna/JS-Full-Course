// Template Literals

const  fullName = 'Sir Lewis Hamilton';
const city = 'England';
const yearOfBirth = '1985';

let val;

val = 'My name is'+fullName+' I\'m'+(2022-yearOfBirth)+' years old'+
    ' and I live in'+city;

val = `my name is ${fullName} I'm ${(2022-yearOfBirth>=18)?'over 18':'under 18'}
    years old and I live in ${city}`;


console.log(val);