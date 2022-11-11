//Sets (Collections but include Unique Values)
let val;

var mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add('iki');
mySet.add({a:1,b:2});

var obj = {a:1,b:2};
mySet.add(obj);

val = mySet.has(1); //1 elemanı var mı ?
val = mySet.has(obj); 
val = mySet.size;

mySet.delete(1);

for(let item of mySet){
    console.log(item);
}

console.log(val);
console.log(mySet);

for(let item of mySet.keys()){
    console.log(item);
}

for(let item of mySet.values()){
    console.log(item);
}

//Set to Array
console.log(Array.from(mySet));

let mySet2 = new Set([1,2]);
console.log(mySet2);

//İntersect of mySet and mySet2

var intersect = new Set(Array.from(mySet).filter(x=>mySet2.has(x)));
var intersect2 = new Set([...mySet].filter(x=>mySet2.has(x)));
console.log(intersect);
console.log(intersect2);

//Difference of mySet and mySet2

var difference = new Set([...mySet].filter(x=>!mySet2.has(x)));
console.clear();
console.log(mySet);
console.log(mySet2);
console.log(difference);

