var hak = 5;
var tahmin;
var sayi = Math.floor((Math.random()*11)+1);
console.log(sayi);

while(hak > 0){
    tahmin = Number(prompt('Tahmininizi Yazınız'));
    console.log(`Tahmin hakkınız ${hak}`);
    if (tahmin == hak){
        console.log('Tebrikler tahmininiz doğru');
        console.log(`Sayi ${sayi} idi`);
    }else if (tahmin > sayi){
        console.log('Tutmadı daha küçük bir sayı');
        hak -= 1;
        tahmin += 1;
        console.log(hak)
    }else if(tahmin < sayi){
        console.log('Tutmadı daha büyük bir sayı bir sayı');
        hak -= 1;
        tahmin += 1;
        console.log(hak)
    }else{
        console.log('Maalesef tahmin hakkınız bitti');
        console.log(`Sayi ${sayi} idi`);
    }
}