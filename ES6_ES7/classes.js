//Classes (OOP)

//ES5

var PersonES5 = function(name,job,car,age){
    this.name = name;
    this.job = job;
    this.car = car;
    this.age = age;
}

PersonES5.prototype.selamver= function(){
    return console.log('SelamınAleyküm. '+this.name+'Yaş.: '+this.age);
};


let vasıfsızEleman = new PersonES5('Hilmi','Mekatronik Mühendisi','Serçe',13);
console.log(vasıfsızEleman);
console.log(vasıfsızEleman.selamver());


//ES6

class PersonES6{
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    calculate(){
        return 2022 - this.age;
    }

    gelsin(){
        if(this.age >= 18){
            return console.log('İşe alınabilir.')
        }else{
            return console.log('Büyü de gel.')
        }
    }
}

let ceo = new PersonES6('Ahmet',14);
console.log(ceo);
console.log(ceo.calculate());
console.log(ceo.gelsin());