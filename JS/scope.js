//Scopes 

//*** Global Scopes 
var name = 'Hilmi';
var age = 45;
function Name(){
    var name = 'Ahmet';
    var age = 30;
    console.log('This is func scope and',name,age);
}
console.log(name);


if (true) {
    var age = 10;
    console.log(`Block scope ${name} and ${age}`);
}
console.log(`After block scope age ${age}`)

Name();
console.log(name);

//*** Local Scopes

//ES6 ile gelen let ve const block scope oluşturur.
console.log("**********************");
if(true){
    var brand = 'Ferrari';
    let model = 2022;
    const color = 'Modena yellow'
    console.log('Block scope',brand,model,color);
}

console.log(brand); //Yazdırdı
//console.log(model); //Hata X
//console.log(color); //Hata X

var i = 1;

for(let i=0; i<10;i++){
    console.log('i',i)
}
console.log(i);