//Demo : Arrays

//"Bmw,Mercedes,Ferrari,Lambo" elemanlarına sahip bir dizi oluşturun.
let brands = ['Bmw','Mercedes','Ferrari','Lambo'];

//Dizi kaç elemanlıdır ?
console.log(brands.length);

//Dizinin ilk ve son elemanı nedir ?
console.log(brands[0]);
console.log(brands[brands.length-1]);

//"McLaren" değerini dizinin souna ekleyin
brands.push('McLaren');
//"Nissan" değerini dizinin başına ekleyin.
brands.unshift('Nissan')
//"McLaren" değerini siliniz.
brands.pop();

//Dizi elemanlarını ters çevirin.
brands.reverse();

//Dizi elemanlarını alfabetik olarak sıralayın.
brands.sort();

//[1,2,5,80] dizisini sıralayın.
var number = [1,2,7,5,80,15,];
function compare(a,b) { //Sayıya göre sıralama fonksiyonu
    if(a>b) return 1;
    if(a==b) return 0;
    if(a<b) return -1;
}
console.log(number.sort(compare));

//"Ferrari" değeri dizinin bir elemanı mı ?
let index = brands.indexOf("Ferrari");
if (index == -1) {
    console.log("Elemanı değildir")
}else{
    console.log("Elemanıdır")
}

//var str = "Honda,Toyota";
//ifadesini diziye çeviriniz.

var str = "Honda,Toyota";
var array = str.split(",");
console.log(array);

//Yukarıda oluşan bu ikiyi diziyi birleştirin.
var con = brands.concat(array);
console.log(con);

//Oluşturulan diziden son 2 elemanı siliniz
console.log(con.splice(4,2));
console.log(con);

//Verilen index i gösterme
console.log(con.slice(4,7));
console.log(con);

console.log(brands);

/*Aşağıda verilen elemanları bir dizi içerisinde saklayınız.

    studentA : Yiğit Bilgi 2010
    studentB : Sena  Turan 1999
    studentC : Ahmet Turan 1998

*/

var studentA = ['Yiğit','Bilgi',2010];
var studentB = ['Sena','Turan',1999];
var studentC = ['Ahmet','Turan',1998];

var students = [studentA,studentB,studentC];

//Döngü kullanmazsan böyle uğraşırsın.
console.log(students[0][0]);
console.log(students[0][1]);
console.log(students[0][2]);

console.log(students[1][0]);
console.log(students[1][1]);
console.log(students[1][2]);

console.log(students[2][0]);
console.log(students[2][1]);
console.log(students[2][2]);



console.log(students);

    