//Function Declarations

function sum(a,b){
    var c = a+b;
    return c;
}

console.log(sum(1,4));

//Function Declarations

//ES6 default parameters
const sum2 = function(a=0,b=0){
    var c = a+b;
    return c;
}

console.log(sum2(1,2));

//Args
function args() {
    console.log(arguments);
}

args(1,2,3,4,5);

function sumAll(){
    var total = 0;
    for(let i = 0; i<arguments.length;i++){
        total += arguments[i];
    }
    return total;
}

console.log(sumAll(1,2,3,4,5,6,7));