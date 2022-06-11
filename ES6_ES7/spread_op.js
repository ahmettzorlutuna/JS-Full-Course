//Spread Operator

let total = function(a,b,c){
    return a+b+c;
}

console.log(total(10,20,30));

let numbers = [10,20,30];

//ES5 
console.log(total.apply(null,numbers));

//ES6
console.log(total(...numbers));

