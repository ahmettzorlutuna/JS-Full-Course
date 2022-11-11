let num = 15.123456789;

//Toplamda 3 basamaklı sayı kullan.
console.log(num.toPrecision(3)); //15.1

//Ondalık kısmı 3 basamak sınırla.
console.log(num.toFixed(3)); //15.123

//En yakın sayıya yuvarla
console.log(Math.round(num));

//Aşağı Yuvarla
console.log(Math.floor(num));

//Yukarı yuvarla
console.log(Math.ceil(num));

//1,2,10,56,20 sayılarından en küçüğünü ve en büyüğünü bul.
console.log(Math.min(1,2,10,56,20));
console.log(Math.max(1,2,10,56,20));

//Kullanıcının belirleyeceği rastgele bir sayı.
var min = 50;
var max = 100;

console.log(Math.floor(min+Math.random()*(max-min)));

/* Bir personelin yaptığı mesai'ye göre aldığı maaşı hesaplayalım.
   ** Brüt maaş  : 3700 TL
   ** Brüt mesai : 10.3 TL
   Ağustos ayı mesai toplamı 42 saat ise toplam brüt maaş nedir ?
   Brüt maaş üzerinden toplam kesinti oranı %25 ise alınacak toplam net maaş nedir ?
*/

var brutMaas = 3700;
var mesiUcreti = 10.3;
var mesaiSuresi = 42;

var toplamBrutMaas = brutMaas + (mesiUcreti*mesaiSuresi);

var toplamNetMaas = toplamBrutMaas - ((toplamBrutMaas*25)/100);

console.log(toplamBrutMaas.toFixed(2));
console.log(toplamNetMaas.toFixed(3));