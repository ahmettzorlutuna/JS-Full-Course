//Demo : Functions

var hesap1 = {
    ad: 'Ahmet Zorlutuna',
    hesapNo: '12345678',
    bakiye: 2000,
    ekHesap: 1000
}

var hesap2 = {
    ad: 'Lionel Messi',
    hesapNo: '12341235',
    bakiye: 3000,
    ekHesap: 2000
}

function paraCek(hesap,miktar){
    console.log(`Merhaba ${hesap.ad}`);

    if(hesap.bakiye >= miktar){
        hesap.bakiye = hesap.bakiye - miktar;
        console.log('paranızı alabilirsiniz');
    }else {
        var toplam = hesap.bakiye + hesap.ekHesap;

        if(toplam>=miktar){
            if(confirm('ek hesabınızı kullanmak istermisiniz')){
                console.log('paranızı alabilirsiniz');
                var bakiye = hesap.bakiye;
                var ekhesap = miktar - bakiye;
                hesap.bakiye = 0;
                hesap.ekhesap = hesap.ekhesap - ekhesap;
            }else{
                console.log(`${hesap.hesapNo} nolu hesabınızda ${miktar} TL bulunmamaktadır.`);
            }
        }else{
            console.log('üzgünüz bakiye yetersiz');
        }
    }

}

paraCek(hesapA,2000);
paraCek(hesapA,1100);
// paraCek(hesapB,2000);