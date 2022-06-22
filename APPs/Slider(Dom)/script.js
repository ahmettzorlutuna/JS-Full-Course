var models = [
    {
        name: 'McLaren P1',
        image: '/Slider(Dom)/IMGS/go_garage_house_dino_dalle_carbonare_07.jpg',
        desc: 'McLaren P1, McLaren Automotive tarafından 2013-2015 yılları arasında sınırlı sayıda üretilen plug-in hibrit süperspor otomobil modelidir.',
        link: 'https://tr.wikipedia.org/wiki/McLaren_P1'
    },
    {
        name: 'Ferrari 488 Pista 0.1',
        image: '/Slider(Dom)/IMGS/go_garage_house_dino_dalle_carbonare_07.jpg',
        link: 'https://www.ferrari.com/en-EN/auto/ferrari-488-pista'
    },
    {
        name: 'Ferrari 488 Pista 0.2',
        image: '/Slider(Dom)/IMGS/go_garage_house_dino_dalle_carbonare_06.jpg',
        link: 'https://www.ferrari.com/en-EN/auto/ferrari-488-pista'
    },
    {
        name: 'Ferrari SF90',
        image: '/Slider(Dom)/IMGS/go_garage_house_dino_dalle_carbonare_48.jpg',
        link: 'https://www.ferrari.com/en-LS/auto/sf90-stradale'
    }
];

var index = 0;
var slaytCount = models.length;
var interval; //Interval methodunun durması için global değişken

var settings = {
    duration: '1000',
    random: false
};

initialize(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function () {
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click', function () {
    index++;
    showSlide(index);
    console.log(index);
});

//SetInterval methodunu durdurma bloğu
document.querySelectorAll('.arrow').forEach(function(arrow){
    arrow.addEventListener('mouseenter',function(){
        clearInterval(interval); //Buradaki interval aşağıdaki oluşturduğumuz setInterval fonksiyonunu global olarak dışarı taşımıştık.
        //clear ıntervalın parametresini de bu şekilde belirtmiş olduk.
    })
});

//Otomatik slayt başlatma bloğu
document.querySelectorAll('.arrow').forEach(function(arrow){
    arrow.addEventListener('mouseleave',function(){
        initialize(settings); //Otomatik slayt tekrar başlar.
    })
})

function initialize(settings) {
    //setTimeout //Örneğin 2sn sonra gerçekleşecek fonksiyonu  belirtiyoruz. 2sn sonra gerçekleşir ve durur.
    //setInterval //Eylemi sürekli çalıştırır taki clearInterval komutu gelene kadar
    var prev;
    interval = setInterval(function () {

        if (settings.random) {
            //Settings true random index oluşturma kısmı
            do {
                index = Math.floor(Math.random() * slaytCount);
                console.log(`Rastgele sayı üretildi ${index}`);
            } while (index == prev);
            prev = index;
        } else {
            //Artan index
            console.log('Artan index');
            if (slaytCount == index + 1) {
                index = 0;
            };
            showSlide(index);
            console.log(index);
            index++;
        }
        showSlide(index);


    }, settings.duration)

}

function showSlide(i) {

    index = i; //bu fonksiyona gönderilen değeri dışarıdaki tanımladığımız global index değerine eşitledik ve kontorllerimizi yaptık.
    if (i < 0) {
        index = slaytCount - 1;

    }
    if (i >= slaytCount) {
        index = 0;
    }
    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-text').textContent = models[index].desc;
    document.querySelector('.card-link').setAttribute('href', models[index].link);
};