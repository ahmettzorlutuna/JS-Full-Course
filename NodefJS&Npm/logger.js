//Node js modele yapısı
url = "http://logger.io/logger";
var password = 41235612356123;
var id = 1

function log(message) {
    console.log(message);
    console.log(__filename);
    console.log(__dirname);
}

var foo = (foo) => {
    console.log('Hello!', foo);
}

var Buz = function () { };
Buz.prototype.log = function () {
    console.log('Buz!');
}
/*
IIFE yapısında olduğu gibi node js de public olarak dışarı açmak istediğimiz fonksiyonları
Module içindeki exports objesinin içine atıyoruz.
*/

//module.exports.log = log;
//module.exports.password = password;
//yada
module.exports = {
    log: log,
    password: password,
    foo: foo,
    Buz: new Buz(),
}



console.log(module);