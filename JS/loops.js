// Loops

//For Loop

for (let i=1; i<=10; i++){
    if(i==1){
        console.log("İ'nin değeri bir oldu şuan");
        continue; //i 1'e eşit olunca burası çalışır ve devam eder.
    }
    if (i==7){
        console.log("İ'nin değeri yedi oldu şuan. Döngü duracak.");
        break;
    }
    console.log(i);
}

//While loop
let i=0;
while(i<10){
    console.log(i);
    i++;
}

//Do-While
let x=0;
do {
    console.log(i);
    i++;
} while (x<10);

sonuc = 1;
for (let i=10;i>0;i--){
    if(i%2==0){
        sonuc *= i;
    }
}
console.log(sonuc);

let val='\n';
for (let i=0;i<10;i++){
    for(let j=0;j<10;j++){
         val +='* ';  
    }
    val+='\n';
}

console.log(val);