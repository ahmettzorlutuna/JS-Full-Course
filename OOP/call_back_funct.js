//CallBack Functions

let val;

function MultipleByTwo(a,b,c,CallBack){
    let arr = [];
    if(CallBack && typeof CallBack === 'function'){ //callback  null değilse ve tipi function ise
        for(let i=0;i<3;i++){
        arr[i] = CallBack(arguments[i]*2); //Arguments parametrelere gelen değerler
    }
    } 
    return arr;
}
val = MultipleByTwo(10,20,30,addOne);
console.log(val);

val = MultipleByTwo(5,10,20,function(a){
    return a+5;
});


// function addOne(a){
//     return a+1;
// }

// for(let i=0;i<val.length;i++){
//     val[i] = addOne(val[i]);
// }

// console.log(val);