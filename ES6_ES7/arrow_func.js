//Arrow Functions

//ES5

let forES5 = function(){
    console.log('ES5 type')
}

forES5();

//ES6
let forES6 = () => {
    console.log('ES6 type without parameter');
};

forES6();

//With parameters as a ES5
let forES5param = function(name){
    console.log('Selam '+name)
}

//forES6param('Ahmet');

let whichoneES5 = function(a,b){
    if (a>b) {
        return a
    } else {
        return b
    }
}

console.log(whichoneES5(10,20));

//With parameters as a ES6
let forES6param = (name) => {
    console.log('Selam '+name)
}

forES6param('Ahmet');

let whichoneES6 = (a,b) => {
    if (a>b) {
        return a
    } else {
        return b
    }
}

console.log(whichoneES6(30,20));

//Parantez kullanılmayacaksa return şart değil.
let multiplyES6 = (x,y) => {return x*y};
let multiply2ES6 = (x,y) => x*y;

//ES5
let splitES5 = function(text){
    return text.split(' '); //Array döndürür.
}

console.log(splitES5('ES5 de arrowsuz ayırma fonk'));

var splitArr = splitES5('Hadi Ayır Bakim Bu Cümleyi Alt Alta');
for (let i = 0; i < splitArr.length; i++) {
    //Alt Alta
    console.log(splitArr[i]);
}

//ES6

let splitES6 = text => text.split(' ');
console.log(splitES6('Ayır ES6 da'));

//Object Literals

//For ES5
let getproductES5 = function(id,name){
    return{
        id: id,
        name: name,
    }
}

console.log(getproductES5('1','Nike'));

//For ES6

let getproductES6 = (id,name) => (
    {
        id: id,
        name: name
    }
)

console.log(getproductES6('2','Adidas'))

let getCameraProduct = (category,lens,mp,model) => (
    {
        category: category,
        lens: lens,
        mp: mp,
        model: model
    }
)

console.log(getCameraProduct('Camera','2.8mm','4mp','DS-2CD2121G0-I'));


let phones = [
    {name:'Iphone4',price:1500},
    {name:'Iphone5',price:2400},
    {name:'Iphone6',price:3400},
    {name:'Iphone6s',price:4000}
];

//ES5
let nameES5 = phones.map(function(phone){ //Fonksiyonun içindeki phone değişkeni phones.map den dönen değerleri barındırıyor.
    return phone.name;
});

console.log(nameES5);

//ES6
let priceES6 = phones.map(phone => phone.price);
console.log(priceES6);

//ES6 v2
let priceES6v2 = phones.map(phone => {
    return phone.price;
})

console.log(priceES6v2);

//ES5 Filter

array = [1,2,5,523,4,7,23,46,2,346,1223,56,213,5,126123,561,23,65,123,5123];

let filterES5 = array.filter(function(number){
    return number%2==0;
})

console.log(filterES5);

//ES6 Filter

let filterES6 = array.filter(number => number%2==0);
console.log(filterES6);