//Numbers

let val;

val = Number('10');
val = parseInt('10');
val = parseFloat('10.5');
val = parseInt('10a'); //10
val = parseInt('a10a'); //NaN

var num = 10.1234123;
val = num.toPrecision(5); //İstenilen basamak sayısı
val = num.toFixed(2); //Virgülden sonra bas. sayısı

val = Math.PI;
val = Math.round(2.4); //Yuvarlama
val = Math.ceil(2.4); //Yukarı yuvarlama
val = Math.floor(2.4); //Aşağı yuvarlama
val = Math.sqrt(144); //Karekök
val = Math.pow(2,4); //Üssü
val = Math.abs(-100); //Mutlak Değer
val = Math.min(1,2,3,4,5,10); //Minimum
val = Math.floor(Math.random()*100+1);

console.log(val);
console.log(typeof val);