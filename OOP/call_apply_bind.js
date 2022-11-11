//Call, Apply & Bind

var welcome = function(age,job){
    console.log('Welcome ' + this.name);
    if(age > 18){
        console.log('Yaşınız sektöre girmeye uygun' + this.name + 'Bey')
    }else{
        console.log('Yaşınız uygun değil. Yaş' +age+ 'Meslek' + job);
    }
}

var selamla = function(city){
    console.log('Selamın aleyküm ' + this.name + '.Nereden geldin? ' + city + 'mu ?. Wow görüşürüz.');
}

var ahmet = {
    name: 'Ahmet',
    job: 'Software'
};


welcome.call(ahmet,15,'İşsiz');
welcome.apply(ahmet,[15,'İşsiz']);


selamver = selamla.bind(ahmet);
selamver('İstanbul');
