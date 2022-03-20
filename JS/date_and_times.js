//Date Object
let d = new Date();
let birthday = new Date(1980,6,2);

//Set Methods
d.setFullYear(2021);
d.setMonth(5);
d.setDate(20);
d.setHours(10);
d.setMinutes(45);
d.setSeconds(20);

//Get Methods
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMonth());
console.log(d.getSeconds());

console.log(d.getFullYear() - birthday.getFullYear());
console.log(d.getMonth() - birthday.getMonth());
console.log(d.getDate() - birthday.getDate());

console.log(d);
console.log(typeof d);