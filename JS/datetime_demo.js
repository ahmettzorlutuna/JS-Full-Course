// Şimdiki tarihin gün ay ve yıl bilgisi
let d = new Date();
console.log(d); 
let now = console.log(d.getDate(),d.getMonth()+1,d.getFullYear())

//Tarih ve saat bilgisini içeren bir Date objesi. 

let dA = new Date('8/24/2010 14:50:10');
var dB = new Date(2010,7,24,14,50,10);
console.log(dA);
console.log(dB);

//1/1/1990 tarihinden bir gün önce

let once = new Date(1990,1,1)
var dayOfMonth = once.getDate();
once.setDate(dayOfMonth-1);
console.log(once);

//İki tarih arasında geçen zaman
var start = new Date('1/1/2002');
var end = new Date('1/1/2022');

var milisecond = end - start;
var saniye = milisecond / 1000;
var dakika = saniye / 60;
var saat = dakika / 60;;
var gun = saat / 24;


console.log('milisecond :'+milisecond);
console.log('saniye :'+saniye);
console.log('dakika :'+dakika);
console.log('saat :'+saat);
console.log('gun :'+gun);

//Yaş hesaplama nasıl yapılır ?

var birthday = new Date('8/1/1985');
var ageDifMs = Date.now() - birthday.getTime(); //1985 ile şimdiki zamanın milisaniye cinsinden farkı. ancak gerçek yaşı bulmak istiyorsak 1970 den çıkarmamız lazım.
var ageDate = new Date(ageDifMs)
console.log(ageDate.getFullYear() - 1970); //gerçek yaşı bulmak için 1970 den çıkarttık.

console.clear();


//Her yıl mayıs ayının 2.haftası pazar günü kutlanan anneler
//günü 2019 yılında ne zaman kutlanacaktır?

var annelerGunu = new Date();
annelerGunu.setHours(0,0,0,0);
annelerGunu.setFullYear(2019);
annelerGunu.setDate(1);
annelerGunu.setMonth(4);
while(annelerGunu.getDay() != 0){
    annelerGunu.setDate(annelerGunu.getDate()+1)
    console.log(annelerGunu.setDate());
}
annelerGunu.setDate(annelerGunu.getDate()+7);
console.log(annelerGunu);

