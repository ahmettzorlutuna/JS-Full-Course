function Factory(){
    this.createEmployee = function(type){
        var employee;

        if(type==='fulltime'){
            employee = new FullTime();
        }else if(type ==='parttime'){
            employee = new PartTime();
        }else{
            employee = new Temporary();
        }
        employee.type = type;
        employee.say = function(){
            console.log(this.type + ' ın saatlik ücreti: ' + this.hourly)
        }

        return employee;

    }
}

var FullTime = function(){
    this.hourly = '30TL';
}

var PartTime = function(){
    this.hourly = '30TL';
}

var Temporary = function(){
    this.hourly = '30TL';
}

var factory = new Factory();

fullTimeemp = factory.createEmployee('fulltime');
fullTimeemp.say();
console.log(fullTimeemp.type);