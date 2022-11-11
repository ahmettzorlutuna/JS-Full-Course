let Person = function (name) {
    this.name = name;
}

Person.prototype.Introduce = function () {
    return `Selam ben ${this.name}`
}

ahmet = new Person('Ahmet');
console.log(ahmet.Introduce());

//Teacher Consturcotr

let Teacher = function (name, branch) {
    Person.call(this, name);
    this.branch = branch;

};

Teacher.prototype = Object.create(Person.prototype); //Person protosuna ait methodları Teacher a verdik.
Teacher.prototype.constructor = Teacher; //Teacher constunu Teacher a eşitledik.

Teacher.prototype.teach = function () {
    return `${this.name} öğretmenin branşı ${this.branch}`;
}

//Student Constoructor

let Student = function (name, number) {
    Person.call(this, name);
    this.number = number;

};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function () {
    return `${this.name} isimli öğrencinin numarası ${this.number}`
};

//HeadMaster Contructor

let HeadMaster = function (name, branch) {
    Teacher.call(this, name, branch);
}

HeadMaster.prototype = Object.create(Teacher.prototype);
Teacher.prototype.constructor = Teacher;

HeadMaster.prototype.shareTask = function () {
    return `${this.name} isimli müdürün branşı ${this.branch}`
};


let öğrtAhmet = new Teacher('AhmetÖğretmen', 'Matematik');
let öğrenciAhmet = new Student('BaşarılıAhmet', 1101)
let müdürAhmet = new HeadMaster('Ahmet', 'Müzik')
console.log(öğrtAhmet.Introduce());
console.log(öğrtAhmet.teach());
console.log(öğrtAhmet);
console.log(öğrenciAhmet.Introduce());
console.log(öğrenciAhmet.study());
console.log(müdürAhmet.Introduce());



