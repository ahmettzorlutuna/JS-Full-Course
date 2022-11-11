//Constructor as a Object Literals

let ahmet1 = {
    name: 'Ahmet',
    age: '78',
    job: 'entrp'
};

//Constructor as a Function
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.yearOfBirth = 2002;
    this.calculate = function () {
        return `${this.name} 'in yaşı ${2022 - this.yearOfBirth}`;
    }
};

//Different way to create Constructor as a Function

let Person = function (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.yearOfBirth = 2002;
    this.calculate = function () {
        return `${this.name} 'in yaşı ${2022 - this.yearOfBirth}`;
    }
}

let ahmet = new Person('ahmet', 90, 'ceo');
console.log(ahmet.calculate());


