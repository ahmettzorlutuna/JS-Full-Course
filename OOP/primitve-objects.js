var a = 10;
var b = a;

console.log(a);
console.log(b);

var obj1 = {
    name : 'messi',
    age: 89
}

var obj2 = obj1;
obj1.age = 12;

console.log(obj1.age); //12
console.log(obj2.age); //12

//***********************/

var num = 50;
var account = {
    name : 'Ahmet',
    accountNumber :'172034'
}

function update(a,b) {
    console.log('update fonk içi a değeri' + a);
    a = 100;
    console.log('update fonk içi a değeri' + a);
    b.accountNumber = '22222';
}

update(num,account);

console.log(num); //50
console.log(account); //22222

var products = [
    {name : 'product name1',price : 3562},
    {name : 'product name2',price : 4522},
    {name : 'product name3',price : 3412},
    {name : 'product name4',price : 4123},
    {name : 'product name5',price : 6432},
    {name : 'product name6',price : 1234},
    {name : 'product name7',price : 6423},
]

function filterProducts(prd){

}
filterProducts(products);
