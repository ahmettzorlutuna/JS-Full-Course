//Prototypal İnheritance

let Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculate = function(){
    return 2018 - this.yearOfBirth;
}

let Teacher = function(name,yearOfBirth,job,subject){
    Person.call(this,name,yearOfBirth,job); //Person.call diyerek Person ın const. ını çağırdık ve Persona
    //göndereceğimiz parametreleri belirttik. this: Teacher ı temsil ediyor. diğer paramterler de fonksiyonun
    //dışarıdan aldığı paramterlere ait değerler.
}

//İnherit the Person protoype methods
//Persona ait proto bilgilerini yeni const umuz olan teachera vermemiz gerekiyor
Teacher.prototype = Object.create(Person.prototype);

//Set Teacher constructor : Teacherın constrocutor bilgilerini set edeceğiz
Teacher.prototype.constructor = Teacher;

//Teacheerın protosuna yeni bir fonksiyon ekleyelim
Teacher.prototype.greeting = function(){
    return 'hello my name is'+this.name;
}

let salim = new Teacher('Salim',1940,'soldier','AWP"er');
console.log(salim);
console.log(salim.calculate()); //Buradaki calculate çağırabilmemizin sebebi yukarıda person a ait proto bilgilerini 
//teacher a vermemiz.