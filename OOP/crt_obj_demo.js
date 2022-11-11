/*
    Demo : Creating Objects

    ** Dışarıdan name ve salary bilgilerini alan Employee constructor'i tanımlayınız.
    ** Yıl içinde o ana kadar alınan toplam maaş ve alınan toplam vergi tutarını hesaplayan fonksiyonu oluşturun.
      Vergi dilimleri
        ** 20.000 'e kadar %20 vergi
        ** 30.000 'e kadar %25 vergi
        ** 30.000 'den sonra %30 vergi
    ** 
*/

let Employee = function (name, salary) {

    if (!(this instanceof Employee)) { //Emplyoee sınıfından türetilen bir instance değilse
        return new Employee(name, salary);
    }

    this.name = name;
    this.salary = salary;
}

Employee.prototype.calculate = function () {
    var month = new Date().getMonth() + 1;
    var tax = 0;
    totalSalary = this.salary * month;


    if (totalSalary <= 20000) {
        tax = totalSalary * 0.2;
    } else if (totalSalary > 20000 && totalSalary <= 30000) {
        tax = totalSalary * 0.25;
    } else {
        tax = totalSalary * 0.3;
    }

    return {
        tax: tax, //Toplam vergi
        paid: totalSalary - tax //Vergi harici ödenen maaş
    }
}

var emp = Employee('Ahmetr', 3000)
console.log(emp.calculate());

