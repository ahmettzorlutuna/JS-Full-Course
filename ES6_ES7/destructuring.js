//Destructuring

//Destructuring assignment*

var a, b, rest;

[a, b] = [10, 20];
console.log(a);
console.log(b);

[a, b, ...rest] = [1, 2, 3, 4, 5, 6, 7];
console.log(a);
console.log(b);
console.log(rest);

({ a, b } = { a: 10, b: 20 });
console.log(a);
console.log(b);

({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a);
console.log(b);
console.log(rest);

//Array destructuring*

const arrConfig = ['localhost', '8080', '900'];

//ES5*

var server = arrConfig[0];
var port = arrConfig[1];
var timeout = arrConfig[2];
console.log(server,port,timeout);

//ES6*

const [server,port,timeout] = arrConfig;
console.log(server,port,timeout);


//Normal Object Assignment*
const objConfig = {
    server: 'localhost',
    port: '8080',
    timeout: '900'
};

//Object destructuring*

const {server,port,timeout} = objConfig;

console.log(server,port,timeout);

//Obje içindeki property i değiştirme*
let {timeout:t} = objConfig;
console.log(t);

//Obje içinde değer tanımlı değilse

const objConfig2 = {
    server: 'localhost',
    port: '8080'
}
const {server2,port2,timeout2=800} = objConfig2;

//Öteleme işlemi

const days = ['mondays','tuesday','wednesday','thursday','friday'];
const[,,wed,,fri] = days;
console.log(wed,fri);



