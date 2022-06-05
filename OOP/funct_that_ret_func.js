//Fonksiyondan geriye fonksiyon döndürme
//Functions that Return Functions

function Question(hobby) {
    switch (hobby) {
        case 'car':
            return function (renk) {
                console.log('Rengi ' + renk + ' mi ?');
            }
            break;
        case 'software':
            return function (lang,lang2) {
                console.log(lang + lang2 + ' ye terchi eder misin ?');
            }
            break;
        default:
            break;
    }
}

var carQue = Question('car'); //Question fonksiyonuna gönderdiğimiz parametreden dönen değeri bir değişkene atadık.
var langQue = Question('software');
carQue('kırmızı'); //car fonksiyonundana dönen return fonksiyonunu kullandık.
langQue('Python','JS');

function SorguyaÇek(isim) {
    switch (isim) {
        case 'ahmet':
            return function () {
                console.log(isim + 'SoyAdın ne ?');
            }
            break;
        default:
            break;
    }
}


var isim = SorguyaÇek('ahmet');
isim('Tuna');

