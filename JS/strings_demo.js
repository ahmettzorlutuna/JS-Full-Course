// Demo: Strings

var sentence = "Sev seni seveni, sevmeyenin gönlü rıza gelir mi? olsundu herşeyden önce sen gelirsin ";

var url = "https://www.balkanelektronik.net/ Hight Tech Security Solutions";

//Cümle kaç karakterlidir ?
console.log(sentence.length);

//Kaç kelimeden oluşuyor?
console.log(sentence.trim().split(" ").length);

//Tüm cümleyi küçük harfe çevirme.
console.log(sentence.toLowerCase());

//Baştaki ve sondaki boşlukları silme.
console.log(sentence.trim());

//'?' 'ni silin cümleden
console.log(sentence.replace("?",""));

//url'nin içinden str kısmını çıkarınız.
console.log(url.slice(8));

//Url hangi protokolü kullanmaktadır. ?
console.log(url.startsWith("https"));
console.log(url.startsWith("http"));

//url, '.com' ifadesinini içeriyor mu ?
console.log(url.indexOf('.com')); //yoksa -1
console.log(url.includes('.com')) //true veya false

//url string ifadesini geçerli bir url olarak düzenle
console.log(url.toLowerCase()
               .replace(/ /g,'-') //Bulduğu tüm karakterleri değiştirir.
               .replace(/ı/g,'i')
               .replace(/u/g,'u')
               .replace(/o/g,'ö')
               .replace(/ş/g,'s')
               .replace(/ç/g,'c')
               
)

