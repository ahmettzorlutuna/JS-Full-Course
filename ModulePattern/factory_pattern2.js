function Garage(){
    this.createNewCar = function(brand){
        var car;

        if(brand === 'ferrari'){
            car = new Ferrari();
        }else if(brand === 'lamborghini'){
            car = new Lamborghini();
        }else if(brand === 'porsche'){
            car = new Porsche();
        }
        car.brand = brand;
        car.showMaxSpeed = function(){
            console.log(`${this.brand} car's max speed is ${this.maxSpeed}`);
        }

        return car
    }
}

class Ferrari {
    constructor(){
        this.brand = 'Ferrari'
        this.model = 'SF 90'
        this.color = 'Rosso Corsa Red'
        this.maxSpeed = '368'
    }
    
}

class Porsche {
    constructor(){
        this.brand = 'Porsche'
        this.model = '992 GT3'
        this.color = 'White'
        this.maxSpeed = '352'
    }
}

class Lamborghini {
    constructor(){
        this.brand = 'Lamborghini'
        this.model = 'Huracan Evo'
        this.color = 'Orange'
        this.maxSpeed = '346'
    }
}

var car = new Garage();

ferrari = car.createNewCar('ferrari');
ferrari.showMaxSpeed();

lambo = car.createNewCar('lamborghini');
lambo.showMaxSpeed();

porsche = car.createNewCar('porsche');
porsche.showMaxSpeed();