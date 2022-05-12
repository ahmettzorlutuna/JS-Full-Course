//Built in const mevcun Constructorın içindeki proto methodları bize yeterli gelmezse genişletebiliriz.

//String
var str1 = 'Ahmet'; //Primitive
var str2 = new String('Ahmet'); //Object


console.log(str1);
console.log(typeof str1);
console.log(str2);
console.log(typeof str2);

if (str2 === 'Ahmet'){ //Burada else çalışır çünkü str2 obje Ahmet string
    console.log('yes');
}else{
    console.log('no');
}

//Extend String Constructor(yeni method ekleme)
String.prototype.repeat = function(n){
    return new Array(n+1).join(this);
}
console.log('maho'.repeat(3));

String.prototype.selamla = function(){
    return `Selam ${this}`
}
console.log('ahmet'.selamla());

String.prototype.iltifatEt = function(){
    return `Bugün çok şıksın ${this}`
}

console.log('Ahmet'.iltifatEt());

//Number 
var number1 = 10;
var number2 = new Number(10);

console.log(number1);
console.log(number2);

//Boolean
var boolean1 = true; 
var boolean2 = new Boolean(true);
console.log(boolean1);
console.log(boolean2);

//Object
var ferrari = { //Object
    country : 'İtalia',
    model : '485 İtalia',
    color : 'Red',
    Hp : 570,
}

var lamborghini = new Object({ //Object
    country : 'İtalia',
    model : 'Huracan',
    color : 'White',
    Hp : 610
})

//Array
var arr1 = ['name1','name2','name3','name4'];
var arr2 = new Array('name1','name2','name3','name4');

Array.prototype.remove = Array.prototype.remove || function(member){ //Array.prototype.remove || öyle bir method olmasına karşın yada operatörünü kullandık. 
    var index = this.indexOf(member); //Üyenin kaçıncı index de olduğu 
    if(index > -1){ 
        this.splice(index,1);
    }
    return this;
}
console.log(arr2);
console.log(arr2.remove('name1'));
