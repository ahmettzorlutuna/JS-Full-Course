//Object.create
//Eğer iki ayrı obje varsa ve bir objenin özelliklerini diğer objeye bilinçli bir şekilde aktarmak istiyorsak.

let personProto = {
    calculateAge : function(){
        return 2022-this.yearOfBirth;
    }
}

let ahmet = Object.create(personProto); //Yeni oluşan bu ahmet objesine personProtoya ait calculateAge fonksiyonu dahil oldu.

ahmet.name = 'ahmet';
ahmet.yearOfBirth = 2009;
ahmet.job = 'CTO';

console.log(ahmet);
console.log(ahmet.calculateAge());