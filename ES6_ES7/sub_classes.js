//Sub Classes

//ES5


function PersonES5(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

PersonES5.prototype.sayHi = function(){
    return `Hello I'm ${this.firstname} ${this.lastname}`
}

function CustomerES5(firstname,lastname,phone,username){
    PersonES5.call(this,firstname,lastname);
    this.phone = phone;
    this.username = username;
}

CustomerES5.prototype = Object.create(PersonES5.prototype); //Person ın prototsunu kalıtım olacağı için Customera verdik.

var customer = new CustomerES5('Ahmet','Zorlutuna','1234356','ahmetzorlutuna');
console.log(customer);

//ES6

class PersonES6{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    sayHi(){
        return `Hello I'am ${this.firstname} ${this.lastname}`
    }
}

class CustomerES6 extends PersonES6{
    constructor(firstname,lastname,phone,username){
        super(firstname,lastname); //Kalıtımdan alınan attributeler
        this.phone = phone;
        this.username = username;
    }
    static getTotal(){
        return 1000;
    }
}

let customer1 = new CustomerES6('NoName','Anon','10010011','anonymous');
console.log(customer1.sayHi());
console.log(CustomerES5.getTotal());