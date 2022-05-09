let Person = function(name,yearOfBirth,job){
    this.name = name,
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    Person.prototype.calculate = function(){
        return 2018 - this.yearOfBirth;
    }
    Person.prototype.fullName = 'Tuna'
}

let ahmet = new Person('ahmet',1670,'man');
let mehmet = new Person('mehmet',1690,'mane');

console.log(mehmet);
console.log(mehmet.calculate());

console.log(mehmet.hasOwnProperty('name')); //True
console.log(mehmet.hasOwnProperty('fullname')); //False çünkü fullname değeri Person objesine ait oluşturulan inheritance a ait değil.
