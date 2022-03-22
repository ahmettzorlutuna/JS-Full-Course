/*
    Sayı Tahmin

    1-10 arası rastgele sayı üretilen bir sayıyı
    aşağı yukarı ifadeleri ile buldurmaya çalışın.
    ** puanlama yapılacak
    ** Kullanıcının kaç kerede bileceği belirtilecek.

*/
console.log('alşkdkasdjgassfgdsa')
var hak = 5;
var tahmin;
var sayi = Math.floor((Math.random()*11)+1);
console.log('Oyun başlatılıyor')
while (hak>0) {
    tahmin = Number(prompt('Tahmininizi Yazınız'));
    console.log(`Tahmin hakkınız ${hak}`);
    switch (sayi) {
        case tahmin > sayi:
            console.log('Tutmadı daha küçük bir sayı');
            hak -= 1;
            tahmin += 1;
            console.log(hak)
            break;
        case tahmin < sayi:
            console.log('Tutmadı daha büyük bir sayı bir sayı');
            hak -= 1;
            tahmin += 1;
            console.log(hak)
            break;
        case tahmin == sayi:
            console.log('Tahmininiz doğru');
            console.log(sayi);
            console.log(`${tahmin} kerede bildiniz.`)
            break;
        default:
            console.log('Hakkınız bitti');
            break;
    }
}

