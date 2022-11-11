//Functions

function yasHesapla(dogumYili){
    return 2022 - dogumYili;
}

console.log(yasHesapla(1965));

//Function in Function

function EmekliligeKacYilKaldi(dogumYili,isim){
    let yas = yasHesapla(dogumYili);
    let emeklilik = 65 - yas;

    if(emeklilik>0){
        console.log(`Emekli olmanıza ${emeklilik} yıl kaldı`);
    }else{
        console.log('Sen zaten emeklisin ho');
    }
}

console.log(EmekliligeKacYilKaldi(1990,'Ahmet'));