const person = {
    firstName: 'Leo',
    lastName: 'Mes',
    // get fullName() {
    //     return `${this.firstName} ${this.lastName}`
    // },
    // set fullName(value) {
    //     const parts = value.split(' ');
    //     this.firstName = parts[0];
    //     this.lastName = parts[1];
    // }
};

Object.defineProperty(person, 'fullname', {
    get: function() {
        return `${this.firstName} ${this.lastName}`
    },
    set: function(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
})

Object.defineProperty(person, 'age', {
    value: 10,
    writable: true
})

person.age = 20;

console.log(person);

person.fullname = 'Cevder sallamasyon';
console.log(person.fullname);
