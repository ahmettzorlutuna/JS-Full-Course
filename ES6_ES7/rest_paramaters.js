//Rest Parameters

//ES5
function baseES5(){
    console.log(arguments);
}

baseES5(10,20,30,40);

//ES6
function sum(){
    let arr = Array.prototype.slice.call(arguments);
    let result = 0;
    arr.forEach(sayı => {
        result += sayı;
    })
    return result;
    
};

console.log(sum(1,2,3,4,5));

//ES5
function isDriver(){
    let array = Array.prototype.slice.call(arguments);
    years.forEach(year => console.log(2022-year>=18));
}

isDriver(1998,2008,2000,2002,2005);



//ES6

function baseES6(...arr){
    return arr;
}
console.log(baseES6(9,8,7,6));



function sumES6(...arr){
    let result = 0;
    arr.forEach(sayı=>result+=sayı);
    return result;
}
console.log(sumES6(90,80,70));


//ES6
function isDriver(age,...years){
    years.forEach(year => console.log(2022-year>=age));
}

isDriver(17,1998,2008,2000,2002,2005);



//Ex

function addThree(x,y,z){
    console.log(x+y+z)
}

var args = [1,2,3];
addThree(...args);


function multiply(multipler, ...theArgs){
    return theArgs.map(element => {
        return multipler * element;
    });
}

var array = multiply()


